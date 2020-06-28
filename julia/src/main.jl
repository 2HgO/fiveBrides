# include("julia.jl")
include("wellKnown.jl")

using gRPC
using ProtoBuf
# using .julia
using .wellKnown
using ProtoBuf
using ProtoBuf.google.protobuf

module Greeter
using ..wellKnown
using ProtoBuf
using ProtoBuf.google.protobuf
# using ..julia

function SayHello(message::HelloRequest) :: HelloReply
	@show message
	name::Union{StringValue, Nothing} = has_field(message, :name) ? getfield(message, :name) : nothing

	wellKnown.HelloReply(message=StringValue(value="""Hello $(isnothing(name) ? "generic" : name.value)! from julia"""))
end
end

methods = MethodDescriptor[
	MethodDescriptor("SayHello", 1, HelloRequest, HelloReply)
]

GreeterService = ProtoService(
	ServiceDescriptor("wellKnown.Greeter", 1, methods),
	Greeter
)

run(gRPCServer((GreeterService,), 55055))

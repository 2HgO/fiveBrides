module julia
  const _ProtoBuf_Top_ = @static isdefined(parentmodule(@__MODULE__), :_ProtoBuf_Top_) ? (parentmodule(@__MODULE__))._ProtoBuf_Top_ : parentmodule(@__MODULE__)
  include("juliaService_pb.jl")
end

# using gRPC
# using ProtoBuf

# module Greeter

# import ..julia

# function SayHello(message::julia.HelloRequest) :: julia.HelloReply
# 	name = getfield(message, :name)

# 	julia.HelloReply(message="Hello $(name)! from julia")
# end
# end

# methods = MethodDescriptor[
# 	MethodDescriptor("SayHello", 1, julia.HelloRequest, julia.HelloReply)
# ]

# GreeterService = ProtoService(
# 	ServiceDescriptor("julia.Greeter", 1, methods),
# 	Greeter
# )

# run(gRPCServer((GreeterService,), 55055))
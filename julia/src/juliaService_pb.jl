# syntax: proto3
using ProtoBuf
import ProtoBuf.meta

mutable struct HelloRequest <: ProtoType
    name::AbstractString
    HelloRequest(; kwargs...) = (o=new(); fillunset(o); isempty(kwargs) || ProtoBuf._protobuild(o, kwargs); o)
end #mutable struct HelloRequest

mutable struct HelloReply <: ProtoType
    message::AbstractString
    HelloReply(; kwargs...) = (o=new(); fillunset(o); isempty(kwargs) || ProtoBuf._protobuild(o, kwargs); o)
end #mutable struct HelloReply

export HelloRequest, HelloReply

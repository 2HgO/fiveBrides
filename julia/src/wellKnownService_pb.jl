# syntax: proto3
using ProtoBuf
import ProtoBuf.meta
import ProtoBuf.google.protobuf

mutable struct HelloRequest <: ProtoType
    name::ProtoBuf.google.protobuf.StringValue
    HelloRequest(; kwargs...) = (o=new(); fillunset(o); isempty(kwargs) || ProtoBuf._protobuild(o, kwargs); o)
end #mutable struct HelloRequest

mutable struct HelloReply <: ProtoType
    message::ProtoBuf.google.protobuf.StringValue
    HelloReply(; kwargs...) = (o=new(); fillunset(o); isempty(kwargs) || ProtoBuf._protobuild(o, kwargs); o)
end #mutable struct HelloReply

export HelloRequest, HelloReply

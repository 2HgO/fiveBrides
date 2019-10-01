package com.gogo;

import static com.gogo.grpc.GreeterGrpc.GreeterImplBase;
import com.gogo.grpc.HelloRequest;
import com.gogo.grpc.HelloReply;

import java.io.IOException;

import io.grpc.stub.StreamObserver;

public class Greeter extends GreeterImplBase
{
    @Override
    public void sayHello(HelloRequest request, StreamObserver<HelloReply> replyObserver)
    {
        String greeting = "Hello " + request.getName() + "! from java";
        HelloReply reply = HelloReply.newBuilder().setMessage(greeting).build();

        replyObserver.onNext(reply);
        replyObserver.onCompleted();
    }

    
}

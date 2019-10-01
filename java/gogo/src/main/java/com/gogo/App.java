package com.gogo;

import java.io.IOException;

import io.grpc.Server;
import io.grpc.ServerBuilder;

public class App {
    public static void main( String[] args ) throws IOException, InterruptedException
    {
        Server server = ServerBuilder.forPort(50054).addService(new Greeter()).build();
 
        server.start();
        server.awaitTermination();
    }
}
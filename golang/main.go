package main

import (
	"context"
	"log"

	pb "fiveBrides/golang/wellKnown"

	"github.com/golang/protobuf/ptypes/wrappers"
	grpc "google.golang.org/grpc"
)

var client = func() pb.GreeterClient {
	conn, err := grpc.Dial(
		"localhost:55055",
		grpc.WithInsecure(),
	)
	if err != nil {
		log.Fatalln(err)
	}
	return pb.NewGreeterClient(conn)
}()

func main() {
	res, _ := client.SayHello(
		context.TODO(),
		&pb.HelloRequest{
			Name: &wrappers.StringValue{},
		},
	)
	log.Println(res)
}

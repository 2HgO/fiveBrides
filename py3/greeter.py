from concurrent import futures
import time
import logging

import grpc

import pythonService_pb2
import pythonService_pb2_grpc

_ONE_DAY_IN_SECONDS = 60 * 60 * 24


class Greeter(pythonService_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        return pythonService_pb2.HelloReply(message=f'Hello {request.name}! from python')


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pythonService_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    try:
        while True:
            time.sleep(_ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        server.stop(0)


if __name__ == '__main__':
    logging.basicConfig()
    serve()
const NODE_PROTO_PATH = '../protos/nodeService.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    NODE_PROTO_PATH,
    {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
    });
const nodeProto = grpc.loadPackageDefinition(packageDefinition).node;

const server = new grpc.Server();
server.addService(nodeProto.Greeter.service, {
    sayHello: (call, callback) => {
        callback(null, {message: `Hello ${call.request.name}! from node`});
    },
});

server.bind('localhost:50052',
grpc.ServerCredentials.createInsecure());
server.start()
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
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const NodeService = protoDescriptor.node;

const client = new NodeService.Greeter('localhost:50052', grpc.credentials.createInsecure());

module.exports = client;
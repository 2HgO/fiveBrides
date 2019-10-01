const GOLANG_PROTO_PATH = '../protos/golangService.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    GOLANG_PROTO_PATH,
    {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
    });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const GolangService = protoDescriptor.golang;

const client = new GolangService.Greeter('localhost:50053', grpc.credentials.createInsecure());

module.exports = client;
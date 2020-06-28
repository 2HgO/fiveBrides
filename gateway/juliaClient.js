const JULIA_PROTO_PATH = '../protos/juliaService.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
		JULIA_PROTO_PATH,
    {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
    });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const JuliaService = protoDescriptor.julia;
const client = new JuliaService.Greeter('localhost:55055', grpc.credentials.createInsecure());
module.exports = client;
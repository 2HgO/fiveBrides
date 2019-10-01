const JAVA_PROTO_PATH = '../protos/javaService.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    JAVA_PROTO_PATH,
    {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
    });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const JavaService = protoDescriptor.java;

const client = new JavaService.Greeter('localhost:50054', grpc.credentials.createInsecure());

module.exports = client;
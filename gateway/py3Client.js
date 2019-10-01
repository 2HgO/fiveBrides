const PY3_PROTO_PATH = '../protos/pythonService.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    PY3_PROTO_PATH,
    {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
    });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const PythonService = protoDescriptor.python;

const client = new PythonService.Greeter('localhost:50051', grpc.credentials.createInsecure());

module.exports = client;
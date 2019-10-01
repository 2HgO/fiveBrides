const py3Client = require('./py3Client');
const nodeClient = require('./nodeClient');
const javaClient = require('./javaClient');
const golangClient = require('./golangClient');

py3Client.SayHello({name: "gogo"}, (error, message) => {
    if (!error) console.log(message);
    else console.error(error);
});

golangClient.SayHello({name: "gogo"}, (error, message) => {
    if (!error) console.log(message);
    else console.error(error);
});

javaClient.SayHello({name: "gogo"}, (error, message) => {
    if (!error) console.log(message);
    else console.error(error);
});

nodeClient.sayHello({name: "gogo"}, (error, message) => {
    if (!error) console.log(message);
    else console.error(error);
});
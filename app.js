const { createServer } = require("node:http");
const createApp = () => {
    return createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end(`<html><body>Welcome to the World Wide Web!</body></html>`) //we need to fix the response.end, otherwise the test will throw an error!
    })  
} 
module.exports = createApp;
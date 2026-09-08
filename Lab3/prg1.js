import http from 'http';
const server = http.createServer((req, res) => {
console.log("Welcome to Node Js");
res.end("Hello from server!");
});
const PORT = 4444;
server.listen(PORT, () => console.log("Server is running..."));

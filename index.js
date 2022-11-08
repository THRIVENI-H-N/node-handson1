const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url === "/url1") {
    res.write(JSON.stringify([1, 2, 3, 4, 5], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]))
    res.end();
    }

    else if (req.url === "/url2") {
        res.write("<h1>Hello everyone</h1>")
        res.end();
    }
})


server.listen(8000, () => {
    console.log('Application in running');
})
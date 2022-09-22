//Khai báo module http để tạo web server
const { copyFileSync } = require('fs')
const http = require('http')
//Khai báo local server
const host = 'localhost' // 127.0.0.1
//khai báo server port
const port = 3000
//tạo server
const server = http.createServer((request, respond) =>{
    respond.end('hello everyone. This is my first page of me')
})
//chạy server
server.listen(port, () =>{
    console.log('Server is running at http://' + host + ":" + port)
})
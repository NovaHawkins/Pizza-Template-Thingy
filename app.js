//fs and http modules are imported
const http = require('http')
const fs = require('fs')

const hostname = "127.0.0.1"
const port = 5500

const home = fs.readFileSync("Main.html")
const menu = fs.readFileSync("Menu.html")
const about = fs.readFileSync("About.html")
const contact = fs.readFileSync("Contact.html")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write(home)
        } else if (req.url === "/Menu.html") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write(menu)
        } else if (req.url === "/About.html") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write(about)
        } else if (req.url === "/Contact.html") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write(contact)
    }
    else if (req.url.match("\.jpg$")) {
        try {
        res.statusCode = 200
        res.setHeader("Content-Type", "image/jpg")
        imgLoc = req.url.replace("/", "./")
        console.log(imgLoc)
        image = fs.readFileSync(imgLoc)
        res.end(image)
        } catch {
        res.statusCode = 404
        res.write("404")
        console.log(req.url)
        }
        } else {
        res.statusCode = 404
        res.write("404")
        console.log(req.url)
        }
        res.end()
})

server.listen(port, hostname, () => {
    console.log("Server is now running")


})
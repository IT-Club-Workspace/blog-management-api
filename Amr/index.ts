import * as http from 'http'

const HOST = process.env.HOST || 'localhost'
const PORT = 4000

const app = http.createServer((_, res) => {
  res.end("CONNECTED")
})


app.listen(PORT, HOST, 0, () => console.log(`Started at http://${HOST}:${PORT}`))


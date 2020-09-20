import express from 'express'
import cors from 'cors'
import routes from './routes'

const server = express()
server.use(cors({ origin: 'http://localhost:3001' }))
server.use(express.json())
server.use('/api/bicho-alagoano', routes)

server.listen(3000)
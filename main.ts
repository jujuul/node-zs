import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import express from 'express'
import { User } from './src/user/controller'
import { UserService } from './src/user/services'

const container = new Container()

/**
 * user模块
 */
container.bind(User).to(User)
container.bind(UserService).to(UserService)

const server = new InversifyExpressServer(container)

server.setConfig(app => {
  app.use(express.json())
})

const app = server.build()

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

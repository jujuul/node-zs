import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Container } from 'inversify'
import express from 'express'
import { User } from './src/user/controller'
import { UserService } from './src/user/services'
import { PrismaClient } from '@prisma/client'
import { PrismaDB } from './src/db'

const container = new Container()

/**
 * user模块
 */
container.bind(User).to(User)
container.bind(UserService).to(UserService)

/**
 * 封装PrismaClient
 */
container.bind<PrismaClient>('PrismaClient').toFactory(() => {
  return () => {
    return new PrismaClient()
  }
})

container.bind(PrismaDB).to(PrismaDB)

const server = new InversifyExpressServer(container)

server.setConfig(app => {
  app.use(express.json())
})

const app = server.build()

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

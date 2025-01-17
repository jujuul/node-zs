import { inject, injectable } from 'inversify'
import { PrismaDB } from '../db'
// import { UserDto } from './user.dto'
import { UserDto } from './user.dto'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

@injectable()
export class UserService {
  constructor(@inject(PrismaDB) private readonly PrismaDB: PrismaDB) {

  }

  public async getList() {
    return await this.PrismaDB.prisma.user.findMany()
  }

  public async createUser(user: UserDto) {
    let userDto = plainToClass(UserDto, user)
    const errors = await validate(userDto)
    console.log(userDto)
    if (errors.length) {
      return errors
    } else {
      console.log(user)
      return await this.PrismaDB.prisma.user.create({
        data: user
      })
    }
  }
}

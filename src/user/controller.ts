import { controller, httpGet as Get, httpPost as Post } from "inversify-express-utils";
import { UserService } from "./services";
import { inject } from "inversify";
import type { Request, Response } from 'express'

@controller('/user')
export class User {
  constructor(@inject(UserService) private readonly UserService: UserService) {

  }

  @Get('/index')
  public getIndex(req: Request, res: Response) {
    console.log(req.query)
    let result = this.UserService.getList()
    res.send(result)
  }

  @Post('create')
  public createUser(req: Request, res: Response) {
    let result = this.UserService.createUser()
    res.send(result)
  }
}

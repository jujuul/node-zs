import { injectable } from 'inversify'

@injectable()
export class UserService {
  public getList() {
    return {
      name: 'test'
    }
  }

  public createUser() {
    return '创建成功'
  }
}

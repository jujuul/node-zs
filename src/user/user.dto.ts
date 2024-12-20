import { IsEmail, IsNotEmpty } from 'class-validator'
import { Transform } from 'class-transformer'
export class UserDto {
  @IsNotEmpty({ message: '名字是必填的' })
  @Transform((user) => user.value.trim())
  name: string

  @IsNotEmpty({ message: '邮箱是必填的' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  email: string
  age: number
}

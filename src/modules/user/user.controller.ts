import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

import { UserService } from './user.service';

@Crud({
  model: {
    type: User
  },
  dto: {
    create: CreateUserDto
  }
})
@Controller("users")
export class UserController {
  constructor(public service: UserService) {}
}

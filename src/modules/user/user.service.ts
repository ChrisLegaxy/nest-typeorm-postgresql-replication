import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(private userRepository: UserRepository) {
    super(userRepository);
  }
}

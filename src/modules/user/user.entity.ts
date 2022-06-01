import { Column, Entity } from 'typeorm';

import { Abstract } from '@/common/abstract.entity';

@Entity()
export class User extends Abstract {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

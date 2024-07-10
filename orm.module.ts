import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersModule } from '../../src/users/users.module' 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // TypeORM configuration options
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'My-account',
      entities: [User],
      synchronize: true, 
    }),
    UsersModule, 
  ],
})
export class OrmModule {}

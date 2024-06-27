
import { Module } from '@nestjs/common';
import { UsersService } from './usuario.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
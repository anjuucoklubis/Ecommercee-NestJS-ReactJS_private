import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidationService } from 'src/common/validation.service';

@Module({
  providers: [RoleService, PrismaService, ValidationService],
  controllers: [RoleController]
})
export class RoleModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/Prisma/prisma.module';
import { CategoryproductController } from './categoryproduct.controller';
import { CategoryproductsService } from './categoryproduct.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { AuthService } from 'src/auth/auth/auth.service';
import { UserService } from 'src/auth/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth/auth.module';

@Module({
  imports: [AuthModule, PrismaModule],
  providers: [
    CategoryproductsService,
    PrismaService,
    ValidationService,
    AuthService,
    UserService,
    JwtService,
  ],
  controllers: [CategoryproductController],
})
export class CategoryproductModule {}

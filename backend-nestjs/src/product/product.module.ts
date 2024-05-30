import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { AuthModule } from 'src/auth/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule],
  providers: [JwtService, ProductService, PrismaService, ValidationService],
  controllers: [ProductController],
})
export class ProductModule {}

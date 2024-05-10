import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidationService } from 'src/common/validation.service';

@Module({
  providers: [ProductService,PrismaService, ValidationService],
  controllers: [ProductController]
})
export class ProductModule {}

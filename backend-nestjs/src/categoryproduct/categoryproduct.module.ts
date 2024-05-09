import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/Prisma/prisma.module';
import { CategoryproductController } from './categoryproduct.controller';
import { CategoryproductsService } from './categoryproduct.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidationService } from 'src/common/validation.service';

@Module({
    imports: [PrismaModule],
    providers: [CategoryproductsService, PrismaService, ValidationService],
    controllers: [CategoryproductController],
})
export class CategoryproductModule {}

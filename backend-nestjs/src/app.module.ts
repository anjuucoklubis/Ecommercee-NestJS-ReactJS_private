import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryproductController } from './categoryproduct/categoryproduct.controller';
import { CategoryproductModule } from './categoryproduct/categoryproduct.module';
import { PrismaModule } from './Prisma/prisma.module';
import { CategoryproductsService } from './categoryproduct/categoryproduct.service';
import { PrismaService } from './prisma/prisma.service';
import { ValidationService } from './common/validation.service';

@Module({
  imports: [CategoryproductModule, PrismaModule,CategoryproductModule],
  controllers: [AppController, CategoryproductController],
  providers: [AppService, CategoryproductsService, PrismaService, ValidationService],
})
export class AppModule {}

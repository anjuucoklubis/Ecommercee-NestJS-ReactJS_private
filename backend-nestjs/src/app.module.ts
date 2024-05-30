import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryproductController } from './categoryproduct/categoryproduct.controller';
import { CategoryproductModule } from './categoryproduct/categoryproduct.module';
import { PrismaModule } from './Prisma/prisma.module';
import { CategoryproductsService } from './categoryproduct/categoryproduct.service';
import { PrismaService } from './prisma/prisma.service';
import { ValidationService } from './common/validation.service';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
// import { LoginModule } from './auth/login/login.module';
import { RoleModule } from './auth/role/role.module';
import { UserModule } from './auth/user/user.module';
import { AuthModule } from './auth/auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CategoryproductModule,
    PrismaModule,
    CategoryproductModule,
    ProductModule,
    RoleModule,
    UserModule,
    AuthModule,
    JwtModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CategoryproductsService,
    ProductService,
    PrismaService,
    ValidationService,
    JwtService,
    ConfigService
  ],
})
export class AppModule {}

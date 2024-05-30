import {
  Controller,
  Get,
  Post,
  Request,
  Res,
  Render,
  UseGuards,
  UseFilters,
  Body,
  Req,
  HttpStatus,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { request } from 'http';
import { UserService } from '../user/user.service';
import { AuthModel, LoginDto, RegisterDto } from 'src/model/auth.model';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { RefreshJwtGuard } from '../guards/refresh-jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(
    private userservice: UserService,
    private authservice: AuthService,
  ) {}

  @Post('/login')
  login(@Body() LoginDto: LoginDto): Promise<{ token: string }> {
    return this.authservice.login(LoginDto);
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('/login')

  // async login(@Res() res: Response, @Body() body: AuthModel) {
  //   try {
  //     const result = await this.authservice.login(body);
  //     return res.status(HttpStatus.OK).json({
  //       success: true,
  //       message: 'Login berhasil',
  //       user: result,
  //     });
  //   } catch (error) {
  //     if (error instanceof UnauthorizedException) {
  //       return res.status(HttpStatus.UNAUTHORIZED).json({
  //         success: false,
  //         message: error.message,
  //       });
  //     }
  //     return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
  //       success: false,
  //       message: 'Terjadi kesalahan saat login',
  //       error: error.message,
  //     });
  //   }
  // }

  @Post('/register')
  async register(@Res() res: Response, @Body() body: RegisterDto) {
    try {
      const result = await this.authservice.register(body);
      return res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'User berhasil diregistrasi',
        user: result.user,
      });
    } catch (error) {
      if (error instanceof ConflictException) {
        return res.status(HttpStatus.CONFLICT).json({
          success: false,
          message: error.message,
        });
      }
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'wkwkw',
        error: error.message,
      });
    }
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
    });
    res.redirect('/login');
  }

  // @UseGuards(RefreshJwtGuard)
  // @Post('refresh')
  // async refrshToken(@Request() req) {
  //   return this.authservice.refreshToken(req.user);
  // }
}

function next(err: any) {
  throw new Error('Function not implemented.');
}

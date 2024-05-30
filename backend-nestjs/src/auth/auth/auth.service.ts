import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from '../user/user.service';
import { AuthModel, LoginDto, RegisterDto } from 'src/model/auth.model';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async checkEmailExist(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
  async register(user: RegisterDto): Promise<any> {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      const reqBody = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: hash,
      };
      const checkEmail = await this.checkEmailExist(user.email);
      if (checkEmail) {
        throw new ConflictException('Email sudah digunakan');
      }
      const result = await this.prisma.user.create({
        data: reqBody,
      });
      return { success: true, user: result };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 
  // async validateUser(username: string, password: string) {
  //   const user = await this.userService.findOne(username);
  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  // async validateUser(email: string, password: string): Promise<any> {
  //   console.log(`Validating user: ${email}`);
  //   const user = await this.userService.findByEmail(email);
  //   if (user && await bcrypt.compare(password, user.password)) {
  //     console.log('User validated successfully');
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   console.log('Invalid credentials');
  //   return null;
  // }

  // async login(data: AuthModel) {
  //   console.log(`Attempting to log in user: ${data.email}`);
  //   const user = await this.userService.findByEmail(data.email);
  //   if (user && await compare(data.password, user.password)) {
  //     const { password, ...result } = user;
  //     const payload = { sub: user.id, username: user.email };
  //     const token = await this.jwtService.sign(payload);
  //     console.log('Generated token:', token);
  //     return {
  //       ...result,
  //       access_token: token,
  //     };
  //   }
  //   console.log('Invalid credentials');
  //   throw new UnauthorizedException('Email atau password salah');
  // }

  // async validateUser(email: string, password: string): Promise<any> {
  //   console.log(`Validating user: ${email}`);
  //   const user = await this.userService.findByEmail(email);
  //   if (user && await bcrypt.compare(password, user.password)) {
  //     console.log('User validated successfully');
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   console.log('Invalid credentials');
  //   return null;
  // }

  // validateToken(token: string) {
  //   return this.jwtService.verify(token, {
  //     secret: process.env.JWT_SECRET_KEY,
  //   });
  // }

  // async refreshToken(user: AuthModel) {
  //   const payload = {
  //     username: user.email,
  //     sub: user.id,
  //   };

  //   return {
  //     accessToken: this.jwtService.sign(payload),
  //   };
  // }
  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const user = await this.userService.findByEmail(email);
  
    if (!user) {
      throw new UnauthorizedException('Invalid email/password');
    }
  
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid email/password');
    }
  
    const payload = { id: user.id }; // Pastikan id pengguna disertakan dalam payload
    const token = this.jwtService.sign(payload);
  
    return { token };
  }
  

}

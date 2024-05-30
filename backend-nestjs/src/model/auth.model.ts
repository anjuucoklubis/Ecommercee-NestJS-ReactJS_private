import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthModel {
  @ApiProperty({
    example: 1,
    description: 'id of the user auth',
  })
  id: number;

  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'emailkamu@gmail.com',
    description: 'email of the user auth',
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 1,
    description: 'password of the user auth',
  })
  password: number;
}

export class LoginDto {
  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({}, { message: 'Email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  @IsString()
  readonly password: string;
}

export class RegisterDto {
  @IsNotEmpty({ message: 'Nama Depan harus diisi' })
  @MinLength(3, { message: 'Nama Depan minimal 3 karakter' })
  @MaxLength(10, { message: 'Nama Depan maximal 10 karakter' })
  first_name: string;

  @IsNotEmpty({ message: 'Nama Belakang harus diisi' })
  @MinLength(3, { message: 'Nama Belakang minimal 3 karakter' })
  @MaxLength(10, { message: 'Nama Belakang maximal 10 karakter' })
  last_name: string;

  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({}, { message: 'Email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  @IsString()
  @MinLength(3, { message: 'Password minimal 3 karakter' })
  @MaxLength(10, { message: 'Password maksimal 10 karakter' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,10}$/, { 
    message: 'Password harus mengandung huruf besar, huruf kecil, angka, dan simbol' 
  })
  password: string;
}

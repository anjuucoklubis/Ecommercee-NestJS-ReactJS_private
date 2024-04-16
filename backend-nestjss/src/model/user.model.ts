import { ApiProperty } from '@nestjs/swagger';

// Request Body

export class RegisterUserRequest {
  @ApiProperty({
    example: 'anju',
    description: 'Username of the user',
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password of the user',
  })
  password: string;

  @ApiProperty({
    example: 'Anju Lubis',
    description: 'Name of the user',
  })
  name: string;
}

export class LoginUserRequest {
  @ApiProperty({
    example: 'anju',
    description: 'Username of the user',
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password of the user',
  })
  password: string;
}

export class UpdateUserRequest {
  @ApiProperty({
    example: 'anju',
    description: 'optional, if want to change name',
  })
  name?: string;

  @ApiProperty({
    example: 'password',
    description: 'optional, if want to change password',
  })
  password?: string;
}

// Response API

export class ResponseRegisterOk {
  @ApiProperty({
    example: 'anju',
    description: 'Username of the user',
  })
  username: string;

  @ApiProperty({
    example: 'anju lubis',
    description: 'name of the user',
  })
  name: string;
}

export class ResponseRegisterBadRequest {
  @ApiProperty({
    example: 'Username already exists',
    description: 'Error message',
  })
  errors: string;
}

export class ResponseLoginOk {
  @ApiProperty({
    example: 'anju',
    description: 'Username of the user',
  })
  username: string;

  @ApiProperty({
    example: 'anju lubis',
    description: 'name of the user',
  })
  name: string;

  @ApiProperty({
    example: '1231231-12313-123131323-example',
    description: 'token auth of the user',
  })
  token?: string;
}

export class UnauthorizedResponse {
  @ApiProperty({
    example: 'Unauthorized',
    description: 'Error message',
  })
  errors: string;
}

export class ResponseGetUserOk {
  @ApiProperty({
    example: 'anju',
    description: 'Username of the user',
  })
  username: string;

  @ApiProperty({
    example: 'anju lubis',
    description: 'name of the user',
  })
  name: string;
}

export class ResponseUpdateOk {
  @ApiProperty({
    example: 'anju',
    description: 'Username updated of the user',
  })
  username: string;

  @ApiProperty({
    example: 'anju lubis',
    description: 'name updated of the user',
  })
  name: string;
}

export class UserResponse {
  @ApiProperty({
    example: 'anju',
    description: 'Username of the user',
  })
  username: string;

  @ApiProperty({
    example: 'anju lubis',
    description: 'name of the user',
  })
  name: string;

  @ApiProperty({
    example: '1231231-12313-123131323-example',
    description: 'token auth of the user',
  })
  token?: string;
}

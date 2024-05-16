import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateRoleRequest {
  @ApiProperty({
    example: 'ADMIN',
    description: 'name of the role created',
  })
  name: string;
}

export class UpdateRoleRequest {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'ADMIN',
    description: 'name of the role updated',
  })
  name?: string;

}
export class RoleResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'ADMIN',
    },
    description: 'Data object example',
  })
  id: number;

  @ApiProperty()
  name: string;
}

export class UnauthorizedResponse {
  @ApiProperty({
    example: 'Unauthorized',
    description: 'Error message',
  })
  errors: string;
}

export class RemoveResponseOk {
  @ApiProperty({ example: true })
  data: boolean;

  constructor(data: boolean) {
    this.data = data;
  }
}

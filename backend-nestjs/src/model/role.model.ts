import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateRoleRequest {
  @ApiProperty({
    example: 'ADMIN',
    description: 'name of the role created',
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'role id of the role created',
  })
  role_id: number;
}

export class UpdateRoleRequest {
  @ApiProperty({
    example: 1,
    description: 'name of the role updated',
  })
  id?: number;


  @ApiProperty({
    example: 'ADMIN',
    description: 'name of the role updated',
  })
  name?: string;

  @ApiProperty({
    example: 1,
    description: 'role id of the role updated',
  })
  role_id?: number;
}
export class RoleResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'ADMIN',
      role_id : 1
    },
    description: 'Data object example',
  })
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  role_id: number;
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

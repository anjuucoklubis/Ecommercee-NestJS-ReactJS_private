import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryProductRequest {
  @ApiProperty({
    example: 'elektronik',
    description: 'name of the category product created',
  })
  name: string;

  @ApiProperty({
    example: 'image.jpg',
    description: 'city of the category product created',
  })
  image: string;
}

export class UpdateCategoryProductRequest {
  @ApiProperty({
    example: 'elektronik',
    description: 'name of the category product updated',
  })
  name?: string;

  @ApiProperty({
    example: 'image.jpg',
    description: 'city of the category product updated',
  })
  image?: string;
}

export class RemoveAddressRequest {
  contact_id: number;
  address_id: number;
}

export class CategoryProductResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'elektronik',
      image: 'image.jpg',
    },
    description: 'Data object example',
  })
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;
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

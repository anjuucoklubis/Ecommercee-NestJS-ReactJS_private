import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProductRequest {
  @ApiProperty({
    example: 'elektronik',
    description: 'name of the category product created',
  })
  name: string;

  @ApiProperty({
    example: 'elektronik adalah mantap',
    description: 'description of the category product created',
  })
  description: string;

  @ApiProperty({
    example: '15000',
    description: 'price of the category product created',
  })
  price: string;

  @ApiProperty({
    example: '10',
    description: 'stock of the category product created',
  })
  stock: string;

  @ApiProperty({
    example: 'image.jpg',
    description: 'city of the category product created',
  })
  image: string;

  @ApiProperty({
    example: 1,
    description: 'categoryId of the category product created',
  })
  categoryId: number;
}

export class UpdateProductRequest {
  @ApiProperty({
    example: 'elektronik',
    description: 'name of the category product created',
  })
  name?: string;

  @ApiProperty({
    example: 'elektronik adalah mantap',
    description: 'description of the category product created',
  })
  description?: string;

  @ApiProperty({
    example: '15000',
    description: 'price of the category product created',
  })
  price?: string;

  @ApiProperty({
    example: '10',
    description: 'stock of the category product created',
  })
  stock?: string;

  @ApiProperty({
    example: 'image.jpg',
    description: 'city of the category product created',
  })
  image?: string;

  @ApiProperty({
    example: 1,
    description: 'categoryId of the category product created',
  })
  categoryId?: number;
}

export class ProductResponse {
  @ApiProperty({
    example: {
      id: 1,
      name: 'elektronik',
      description: 'elektronik adalah mantap',
      price: '15000',
      stock: '10',
      image: 'image.jpg',
      categoryId: 1,
    },
    description: 'Data object example',
  })
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  stock: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  categoryId: number;
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

import { ApiProperty } from '@nestjs/swagger';

export class CreateContactRequest {
  @ApiProperty({
    example: 'Anju',
    description: 'first name of the user Contact',
  })
  first_name: string;

  @ApiProperty({
    example: 'Lubis',
    description: 'lastname of the user Contact',
  })
  last_name?: string;

  @ApiProperty({
    example: 'anju@example.com',
    description: 'email of the user Contact',
  })
  email?: string;

  @ApiProperty({
    example: '08999999999',
    description: 'phone of the user Contact',
  })
  phone?: string;
}

export class UpdateContactRequest {
  @ApiProperty({
    example: '1',
    description: 'ID of the user Contact',
  })
  id: number;

  @ApiProperty({
    example: 'Anju',
    description: 'first name of the user Contact updated',
  })
  first_name: string;

  @ApiProperty({
    example: 'Lubis',
    description: 'lastname of the user Contact updated',
  })
  last_name?: string;

  @ApiProperty({
    example: 'anju@example.com',
    description: 'email of the user Contact updated',
  })
  email?: string;

  @ApiProperty({
    example: '08999999999',
    description: 'phone of the user Contact updated',
  })
  phone?: string;
}

export class SearchContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  page: number;
  size: number;
}

export class ContactResponse {
  @ApiProperty({
    example: {
      id: 1,
      first_name: 'Anju',
      last_name: 'Lubis',
      email: 'anju@example.com',
      phone: '123456789',
    },
    description: 'Data object example',
  })
  data: {
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
  };

  constructor(data: any) {
    this.data = data;
  }
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

export class SearchResponseOk {
  @ApiProperty({
    example: {
      id: 1,
      first_name: 'Anju',
      last_name: 'Lubis',
      email: 'anju@example.com',
      phone: '123456789',
    },
    description: 'Data object example',
  })
  data: {
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
  };

  @ApiProperty({
    example: { current_page: 1, total_page: 10, size: 10 },
    description: 'Paging object example',
  })
  paging: {
    current_page: number;
    total_page: number;
    size: number;
  };

  constructor(data: any, paging: any) {
    this.data = data;
    this.paging = paging;
  }
}

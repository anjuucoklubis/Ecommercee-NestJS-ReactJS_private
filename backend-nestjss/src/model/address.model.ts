import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressRequest {
  @ApiProperty({
    example: '1',
    description: 'contact_id of the address created',
  })
  contact_id: number;

  @ApiProperty({
    example: 'Jalan Sisingamangaraja',
    description: 'street of the address created',
  })
  street?: string;

  @ApiProperty({
    example: 'Toba',
    description: 'city of the address created',
  })
  city?: string;

  @ApiProperty({
    example: 'Sumatera Utara',
    description: 'province of the address created',
  })
  province?: string;

  @ApiProperty({
    example: 'Indonesia',
    description: 'country of the address created',
  })
  country: string;

  @ApiProperty({
    example: '22312',
    description: 'postal_code of the address created',
  })
  postal_code: string;
}

export class GetAddressRequest {
  contact_id: number;
  address_id: number;
}

export class UpdateAddressRequest {
  @ApiProperty({
    example: '1',
    description: 'id of the address updated',
  })
  id: number;

  @ApiProperty({
    example: '1',
    description: 'contact_id of the address updated',
  })
  contact_id: number;

  @ApiProperty({
    example: 'Jalan Sisingamangaraja',
    description: 'street of the address updated',
  })
  street?: string;

  @ApiProperty({
    example: 'Toba',
    description: 'city of the address updated',
  })
  city?: string;

  @ApiProperty({
    example: 'Sumatera Utara',
    description: 'province of the address updated',
  })
  province?: string;

  @ApiProperty({
    example: 'Indonesia',
    description: 'country of the address updated',
  })
  country: string;

  @ApiProperty({
    example: '22312',
    description: 'postal_code of the address updated',
  })
  postal_code: string;
}

export class RemoveAddressRequest {
  contact_id: number;
  address_id: number;
}

export class AddressResponse {
  @ApiProperty({
    example: {
      id: 1,
      street: 'Jalan Sisingamangaraja',
      city: 'Toba',
      province: 'Sumatera Utara',
      country: 'Indonesia',
      postal_code: '22312',
    },
    description: 'Data object example',
  })
  data: {
    id: number;
    street?: string;
    city?: string;
    province?: string;
    country: string;
    postal_code: string;
  };
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
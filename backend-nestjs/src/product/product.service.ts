import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateProductRequest,
  ProductResponse,
  UpdateProductRequest,
} from 'src/model/product.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductValidation } from './product.validation';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private readonly prisma: PrismaService,
    private validationService: ValidationService,
  ) {}

  async create(
    file: Express.Multer.File,
    request: CreateProductRequest,
  ): Promise<ProductResponse> {
    try {
      if (!file || !file.filename) {
        throw new BadRequestException('No image file uploaded');
      }
      if (!file.mimetype.startsWith('image/')) {
        throw new BadRequestException('Uploaded file is not an image');
      }
      const createProductRequest: CreateProductRequest =
        this.validationService.validate(ProductValidation.CREATE, request);

      const createProduct = await this.prisma.product.create({
        data: { ...createProductRequest, image: file.filename },
      });

      const response: ProductResponse = {
        id: createProduct.id,
        name: createProduct.name,
        description: createProduct.description,
        price: createProduct.price,
        stock: createProduct.stock,
        image: createProduct.image,
        categoryId: createProduct.categoryId,
      };

      return response;
    } catch (error) {
      throw new Error('Failed to create product: ' + error.message);
    }
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id: +id,
      },
    });
  }

  // async update(
  //   id: number,
  //   request: UpdateProductRequest,
  // ): Promise<ProductResponse> {
  //   try {
  //     const updateRequest: UpdateProductRequest =
  //       this.validationService.validate(ProductValidation.UPDATE, request);
  //     const productId = parseInt(id.toString(), 10);
  //     const updatedData: Partial<Prisma.ProductUpdateInput> = {};
  //     if (updateRequest.name) {
  //       updatedData.name = updateRequest.name;
  //     }
  //     if (updateRequest.description) {
  //       updatedData.description = updateRequest.description;
  //     }
  //     if (updateRequest.price) {
  //       updatedData.price = updateRequest.price;
  //     }
  //     if (updateRequest.stock) {
  //       updatedData.stock = updateRequest.stock;
  //     }
  //     if (updateRequest.image) {
  //       updatedData.image = updateRequest.image;
  //     }
  //     // if (updateRequest.categoryId) {
  //     //   const category = await this.prisma.categoryProduct.findUnique({
  //     //     where: {
  //     //       id: updateRequest.categoryId,
  //     //     },
  //     //   });
  //     //   if (category) {
  //     //     updatedData.category = { connect: { id: category.id } };
  //     //   } else {
  //     //     throw new Error('Category not found');
  //     //   }
  //     // }
  //     if (updateRequest.categoryId) {
  //       updatedData.category = { connect: { id: updateRequest.categoryId } };
  //     }
  //     if (Object.keys(updatedData).length > 0) {
  //       return await this.prisma.product.update({
  //         where: {
  //           id: productId,
  //         },
  //         data: updatedData,
  //       });
  //     } else {
  //       throw new Error('Nothing to update');
  //     }
  //   } catch (error) {
  //     if (error instanceof BadRequestException) {
  //       throw new Error('Validation failed: ' + error.message);
  //     } else {
  //       throw new Error('Failed to update product');
  //     }
  //   }
  // }

  async update(
    id: number,
    data: Prisma.ProductUpdateInput,
  ): Promise<ProductResponse> {
    try {
      // const updateRequest: UpdateProductRequest =
      //   this.validationService.validate(ProductValidation.UPDATE, data);
      const productId = parseInt(id.toString(), 10);
      const updatedData: Partial<Prisma.ProductUpdateInput> = {};

      // Update data based on request
      if (data.name) {
        updatedData.name = data.name;
      }
      if (data.description) {
        updatedData.description = data.description;
      }
      if (data.price) {
        updatedData.price = data.price;
      }
      if (data.stock) {
        updatedData.stock = data.stock;
      }
      if (data.image) {
        updatedData.image = data.image;
      }
      if (data.category) {
        // Connect product to the new category
        updatedData.category = data.category;
      }

      if (Object.keys(data).length > 0) {
        return await this.prisma.product.update({
          where: {
            id: productId,
          },
          data: data,
        });
      } else {
        throw new Error('Nothing to update');
      }
    } catch (error) {
      throw new Error('Error update');
    }
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id: +id,
      },
    });
  }
}

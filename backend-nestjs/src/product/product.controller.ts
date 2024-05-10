import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageUploadProduct } from 'src/utils/storage-upload';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  CreateProductRequest,
  ProductResponse,
  UnauthorizedResponse,
  UpdateProductRequest,
} from 'src/model/product.model';
import { WebResponse } from 'src/model/web.model';
import { existsSync, unlinkSync } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

const MAX_IMAGE_UPLOAD = 0.1 * 1024 * 1024;

@Controller('product')
export class ProductController {
  prisma: any;
  constructor(
    private readonly productService: ProductService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('image', StorageUploadProduct))
  @ApiOkResponse({
    description: 'OK',
    type: ProductResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: UnauthorizedResponse,
  })
  @HttpCode(200)
  async create(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /image\/(jpeg|png)/ })
        .addMaxSizeValidator({ maxSize: MAX_IMAGE_UPLOAD })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
    @Body() body: CreateProductRequest,
  ): Promise<WebResponse<ProductResponse>> {
    try {
      if (!file || !file.filename) {
        throw new Error('No image file uploaded');
      }
      body.image = file.filename;
      const categoryIdString = String(body.categoryId);

      // Mengonversi categoryId menjadi angka
      const categoryIdNumber = parseInt(categoryIdString, 10);

      const createProductRequest: CreateProductRequest = {
        ...body,
        categoryId: categoryIdNumber,
        image: file.filename,
      };
      const result = await this.productService.create(
        file,
        createProductRequest,
      );
      return {
        data: result,
      };
    } catch (error) {
      throw new Error('Failed to create category product: ' + error.message);
    }
  }

  @Get('/get')
  findAll() {
    return this.productService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  // @Patch('/update/:id')
  // @ApiOkResponse({
  //   description: 'OK',
  //   type: ProductResponse,
  // })
  // @ApiBadRequestResponse({
  //   description: 'Bad Request',
  //   type: UnauthorizedResponse,
  // })
  // @HttpCode(200)
  // @UseInterceptors(FileInterceptor('image', StorageUploadProduct))
  // async update(
  //   @Param('id') id: number,
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() body: UpdateProductRequest,
  // ) {
  //   try {
  //     const productId = parseInt(id.toString(), 10);
  //     const product = await this.productService.findOne(productId);

  //     if (!product) {
  //       throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  //     }

  //     if (file && file.filename) {
  //       const oldImagePath = `./public/img/product/${product.image}`;
  //       if (existsSync(oldImagePath)) {
  //         unlinkSync(oldImagePath);
  //         console.log(`Deleted old image file: ${oldImagePath}`);
  //       } else {
  //         console.log(`File not found: ${oldImagePath}`);
  //       }

  //       body.image = file.filename;
  //     }
  //     if (body.categoryId) {
  //       const category = await this.prisma.categoryProduct.findUnique({
  //         where: {
  //           id: body.categoryId,
  //         },
  //       });
  //       if (!category) {
  //         throw new HttpException('Invalid categoryId', HttpStatus.BAD_REQUEST);
  //       }
  //     }
  //     if (body.name || body.image) {
  //       const updatedProduct = await this.productService.update(
  //         productId,
  //         body,
  //       );
  //       const response = {
  //         'INFORMATION-RESPONSE': {
  //           REQUESTNAME: 'UPDATE PRODUCT',
  //           METHOD: 'PATCH',
  //           'STATUS-RESPONSE': HttpStatus.OK,
  //           url: 'http://127.0.0.1:3000/product/update/id',
  //         },
  //         'RESPONSE-DATA': {
  //           id: updatedProduct.id,
  //           name: updatedProduct.name,
  //           description: updatedProduct.description,
  //           price: updatedProduct.price,
  //           stock: updatedProduct.stock,
  //           image: updatedProduct.image,
  //           categoryId: updatedProduct.categoryId,
  //         },
  //       };
  //       return response;
  //     } else {
  //       throw new Error('No valid data provided for update');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     throw new HttpException(
  //       'Internal Server Error',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  @Patch('/update/:id')
  @ApiOkResponse({
    description: 'OK',
    type: ProductResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: UnauthorizedResponse,
  })
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('image', StorageUploadProduct))
  async update(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Prisma.ProductUpdateInput,
  ) {
    try {
      const productId = parseInt(id.toString(), 10);
      const product = await this.productService.findOne(productId);

      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }

      if (file && file.filename) {
        const oldImagePath = `./public/img/product/${product.image}`;
        if (existsSync(oldImagePath)) {
          unlinkSync(oldImagePath);
          console.log(`Deleted old image file: ${oldImagePath}`);
        } else {
          console.log(`File not found: ${oldImagePath}`);
        }

        body.image = file.filename;
      }

      if (
        body.name ||
        body.description ||
        body.price ||
        body.stock ||
        body.image ||
        body.category
      ) {
        // Update product
        const updatedProduct = await this.productService.update(
          productId,
          body,
        );
        const response = {
          'INFORMATION-RESPONSE': {
            REQUESTNAME: 'UPDATE PRODUCT',
            METHOD: 'PATCH',
            'STATUS-RESPONSE': HttpStatus.OK,
            url: `http://127.0.0.1:3000/product/update/${productId}`,
          },
          'RESPONSE-DATA': {
            id: updatedProduct.id,
            name: updatedProduct.name,
            description: updatedProduct.description,
            price: updatedProduct.price,
            stock: updatedProduct.stock,
            image: updatedProduct.image,
            categoryId: updatedProduct.categoryId,
          },
        };
        return response;
      } else {
        throw new Error('No valid data provided for update');
      }
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error; // Rethrow HttpException
      } else {
        throw new HttpException(
          'Internal Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: number, @Res() response: Response) {
    const deletedRecord = await this.productService.remove(+id);

    if (deletedRecord) {
      const filePath = `./public/img/product/${deletedRecord.image}`;
      try {
        unlinkSync(filePath);
        console.log(`Deleted image file: ${filePath}`);
      } catch (error) {
        console.error(`Error deleting image file: ${error}`);
      }
      const response = {
        'INFORMATION-RESPONSE': {
          REQUESTNAME: 'DELETE PRODUCT',
          METHOD: 'DELETE',
          'STATUS-RESPONSE': HttpStatus.OK,
          url: 'http://127.0.0.1:3000/product/delete/id',
        },
        'RESPONSE-DATA': {
          id: deletedRecord.id,
          name: deletedRecord.name,
          description: deletedRecord.description,
          price: deletedRecord.price,
          stock: deletedRecord.stock,
          image: deletedRecord.image,
          createdAt: deletedRecord.createdAt,
          updatedAt: deletedRecord.updatedAt,
        },
      };
      return response;
    } else {
      return response;
    }
  }
}

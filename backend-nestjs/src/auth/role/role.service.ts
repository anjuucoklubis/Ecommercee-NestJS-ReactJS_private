import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateRoleRequest,
  RoleResponse,
  UpdateRoleRequest,
} from 'src/model/role.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleValidation } from './role.validation';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(
    @Inject(forwardRef(() => PrismaService))
    private readonly prisma: PrismaService,
    private validationService: ValidationService,
  ) {}

  async create(request: CreateRoleRequest): Promise<RoleResponse> {
    try {
      const createRoleRequest: CreateRoleRequest =
        this.validationService.validate(RoleValidation.CREATE, request);

      const createRole = await this.prisma.role.create({
        data: { ...createRoleRequest },
      });

      const response: RoleResponse = {
        id: createRole.id,
        name: createRole.name,
      };

      return response;
    } catch (error) {
      throw new Error('Failed to create category product: ' + error.message);
    }
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({
      where: {
        id: +id,
      },
    });
  }

  // async update(
  //   id: number,
  //   request: UpdateRoleRequest,
  // ): Promise<RoleResponse> {
  //   try {
  //     const updateRequest: UpdateRoleRequest =
  //       this.validationService.validate(
  //         RoleValidation.UPDATE,
  //         request,
  //       );
  //     const roleId = parseInt(id.toString(), 10);
  //     const updatedData: Partial<Prisma.RoleUpdateInput> = {};
  //     if (updateRequest.name) {
  //       updatedData.name = updateRequest.name;
  //     }

  //     if (Object.keys(updatedData).length > 0) {
  //       return await this.prisma.role.update({
  //         where: {
  //           id: roleId,
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
  //       throw new Error('Failed to update role');
  //     }
  //   }
  // }

  async update (id: number, data: UpdateRoleRequest){  
    return await this.prisma.role.update({
        where: {
            id:id,
        },data
    });
}

  async remove(id: number) {
    return await this.prisma.role.delete({
      where: {
        id: id,
      },
    });
  }
}

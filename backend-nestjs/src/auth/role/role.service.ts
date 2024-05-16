import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
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

      const existingRole = await this.prisma.role.findUnique({
        where: { role_id: request.role_id },
      });

      if (existingRole) {
        throw new BadRequestException('role_id already exists');
      }

      const createRole = await this.prisma.role.create({
        data: { ...createRoleRequest },
      });

      const response: RoleResponse = {
        id: createRole.id,
        name: createRole.name,
        role_id: createRole.role_id,
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

  async update(request: UpdateRoleRequest): Promise<RoleResponse> {
    try {
      const updateRoleRequest: UpdateRoleRequest =
        this.validationService.validate(RoleValidation.UPDATE, request);

      const existingRole = await this.prisma.role.findUnique({
        where: { id: request.id },
      });

      if (!existingRole) {
        throw new NotFoundException('Role tidak ditemukan');
      }

      const updateRole = await this.prisma.role.update({
        where: { id: request.id },
        data: { ...updateRoleRequest },
      });

      const response: RoleResponse = {
        id: updateRole.id,
        name: updateRole.name,
        role_id: updateRole.role_id,
      };

      return response;
    } catch (error) {
      throw new Error('Gagal memperbarui role: ' + error.message);
    }
  }

  async remove(id: number) {
    return await this.prisma.role.delete({
      where: {
        id: id,
      },
    });
  }
}

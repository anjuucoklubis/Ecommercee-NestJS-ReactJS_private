import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  CreateRoleRequest,
  RoleResponse,
  UnauthorizedResponse,
  UpdateRoleRequest,
} from 'src/model/role.model';
import { WebResponse } from 'src/model/web.model';

@Controller('role')
export class RoleController {
  prisma: any;
  constructor(private readonly roleService: RoleService) {}

  @Post('/create')
  @ApiOkResponse({
    description: 'OK',
    type: RoleResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: UnauthorizedResponse,
  })
  @HttpCode(200)
  async create(
    @Body() request: CreateRoleRequest,
  ): Promise<WebResponse<RoleResponse>> {
    try {
      const result = await this.roleService.create(request);
      return {
        data: result,
      };
    } catch (error) {
      throw new Error('Failed to create Role: ' + error.message);
    }
  }
  @Get('/get')
  findAll() {
    return this.roleService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: number) {
    return this.roleService.findOne(+id);
  }

  @Patch('/update/:id')
  @ApiOkResponse({
    description: 'OK',
    type: RoleResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: UnauthorizedResponse,
  })
  @HttpCode(200)
  async update(@Param('id') id: number, @Body() body: UpdateRoleRequest) {
    return await this.roleService.update({
      id: +id,
      ...body,
    });
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: number, @Res() response: Response) {
    const deletedRecord = await this.roleService.remove(+id);
    if (deletedRecord) {
      const response = {
        'INFORMATION-RESPONSE': {
          REQUESTNAME: 'DELETE ROLE',
          METHOD: 'DELETE',
          'STATUS-RESPONSE': HttpStatus.OK,
          url: 'http://127.0.0.1:3000/role/delete/id',
        },
        'RESPONSE-DATA': {
          id: deletedRecord.id,
          name: deletedRecord.name,
          role_id: deletedRecord.role_id,
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

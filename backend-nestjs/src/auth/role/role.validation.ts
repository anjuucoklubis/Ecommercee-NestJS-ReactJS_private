import { z, ZodType } from 'zod';

export class RoleValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(1).max(225),
    role_id: z.number().min(1).max(225),
  });

  static readonly UPDATE: ZodType = z.object({
    name: z.string().min(1).max(225).optional(),
    role_id: z.number().min(1).max(225).optional(),
  });

  static readonly REMOVE: ZodType = z.object({
    id: z.number().min(1).positive(),
  });
}

import { SetMetadata } from '@nestjs/common';

export class rolesDecorator {}

export const ROLSE_KEY = 'roles';

export const Roles = (...rolesd: string[]) => SetMetadata(ROLSE_KEY, rolesd);

import { SetMetadata } from '@nestjs/common';

export class rolesDecorator {}

export const ROLSE_KEY = 'roles';

export const Rolse = (...rolesd: string[]) => SetMetadata(ROLSE_KEY, rolesd);

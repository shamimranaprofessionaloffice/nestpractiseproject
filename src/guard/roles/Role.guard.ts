// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './rolse.enum';
import { ROLSE_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get roles from decorator
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLSE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(requiredRoles);

    if (!requiredRoles) return true; // No role restriction → allow

    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);

    return true // Check user's role
  }
}

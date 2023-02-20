import { CanActivate, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

export function AdminOnly(
  // eslint-disable-next-line @typescript-eslint/ban-types
  ...guards: (CanActivate | Function)[]
): MethodDecorator & ClassDecorator {
  return UseGuards(JwtAuthGuard, AdminGuard, ...guards);
}

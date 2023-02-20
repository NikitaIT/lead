import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class AdminController {
  constructor(private usersService: UsersService) {}

  @Get('/init')
  async init() {
    const admin = await this.usersService.findOneByUsername('admin');
    if (admin) return;

    await this.usersService.create({
      username: 'admin',
      email: 'admin@email.com',
      password: 'password',
    });

    const adminDocument = await this.usersService.findOneByUsername('admin');

    adminDocument.permissions = ['admin'];
    await adminDocument.save();
    return 'lol';
  }
}

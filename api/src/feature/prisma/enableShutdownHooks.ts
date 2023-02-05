import { PrismaService } from '@lead/models';
import { INestApplication } from '@nestjs/common';

export class PrismaConfig {
  async setup(app: INestApplication) {
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
  }
}

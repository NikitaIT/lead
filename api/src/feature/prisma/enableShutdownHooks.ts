import { PrismaService } from '@lead/models';
import { INestApplication } from '@nestjs/common';

export class PrismaConfig {
  async setup(app: INestApplication) {
    try {
      // const prismaService = app.get(PrismaService);
      // await prismaService.enableShutdownHooks(app);
    } catch (error) {
      //PrismaService not found
    }
  }
}

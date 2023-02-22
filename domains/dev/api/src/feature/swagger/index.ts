import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerApiConfig {
  setup(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Lead API')
      .setDescription('The Lead API description')
      .setVersion('0.0.1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}

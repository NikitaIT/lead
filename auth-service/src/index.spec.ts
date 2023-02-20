import { ConfigModule } from '@nestjs/config';
import { TestingModule, Test } from '@nestjs/testing';
import path from 'path';
import { config } from 'dotenv';
import { AppModule } from './app/app.module';
import { AuthModule } from './auth/adapters';
import { UsersModule } from './users';

describe('Users', () => {
  it('works', async () => {
    config({ path: path.resolve(__dirname, '../.env') });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UsersModule, AuthModule, ConfigModule],
      providers: [],
    }).compile();
    // moduleFixture.createNestApplication();s
    // const app = moduleFixture.createNestApplication();
    // await app.init();
  });
});

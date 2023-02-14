import { GenerateOptions } from '@nestjs/graphql';
import { join } from 'path';

export function generateOptions(
  LIB_ROOT = 'api/',
  ext = 'graphql'
): GenerateOptions {
  return {
    typePaths: [
      `${LIB_ROOT}src/**/*.graphql`,
      `${LIB_ROOT}src/**/*.graphql.pubsub`,
    ],
    path: join(process.cwd(), `${LIB_ROOT}src/app/graphql.pubsub.ts`),
    // outputAs: 'class',
    emitTypenameField: true,
  };
}

export function generateFederationOptions(
  LIB_ROOT = 'api/',
  ext = 'graphql'
): GenerateOptions {
  return {
    typePaths: [
      `${LIB_ROOT}src/**/*.graphql`,
      `${LIB_ROOT}src/**/*.graphql.federation`,
    ],
    path: join(process.cwd(), `${LIB_ROOT}src/app/graphql.federation.ts`),
    // outputAs: 'class',
    emitTypenameField: true,
  };
}

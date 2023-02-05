import { GenerateOptions } from '@nestjs/graphql';
import { join } from 'path';

export function generateOptions(LIB_ROOT = 'api/'): GenerateOptions {
  return {
    typePaths: [`${LIB_ROOT}src/**/*.graphql`],
    path: join(process.cwd(), `${LIB_ROOT}src/app/graphql.ts`),
    // outputAs: 'class',
    emitTypenameField: true,
  };
}

import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { generateOptions } from '../../feature/graphql/GenerateOptions';

export function main() {
  const definitionsFactory = new GraphQLDefinitionsFactory();
  const options = generateOptions();
  console.log(options);
  definitionsFactory.generate(options);
}

// todo: write some python like check
main();

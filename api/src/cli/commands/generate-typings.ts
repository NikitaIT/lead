import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import {
  generateOptions,
  generateFederationOptions,
} from '../../feature/graphql/GenerateOptions';

export function main() {
  const definitionsFactory = new GraphQLDefinitionsFactory();
  const opt = [generateOptions(), generateFederationOptions()];
  opt.map((options) => {
    console.log(options);
    definitionsFactory.generate(options);
  });
}

// todo: write some python like check
main();

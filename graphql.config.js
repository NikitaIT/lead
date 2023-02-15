module.exports = {
  projects: {
    app: {
      schema: [
        'http://localhost:4000/graphql',
        // 'http://localhost:5003/graphql-sub',
        // 'http://localhost:5006/graphql',
      ],
      //documents: ['./**/*.{graphql}'],
    },
    // db: {
    //   schema: 'src/generated/db.graphql',
    //   documents: ['src/db/**/*.graphql', 'my/fragments.graphql'],
    //   extensions: {
    //     codegen: [
    //       {
    //         generator: 'graphql-binding',
    //         language: 'typescript',
    //         output: {
    //           binding: 'src/generated/db.ts',
    //         },
    //       },
    //     ],
    //   },
    // },
  },
};

# models

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test models` to execute the unit tests via [Jest](https://jestjs.io).

## How to use

1. Change schema
2. Apply without mingration `prisma db push`
3. If all is ok
4. Create mingration `prisma migrate dev --create-only --name added_job_title`, or apply immidiatly without `--create-only`
5. Add some code in mingration if needed
6. Apply mingration `npx prisma migrate dev`
7. commit

import axios from 'axios';
//import { GraphQLSchemaHost } from "@nestjs/graphql";
describe('GET /', () => {
  it('should return a message', async () => {
    //const { schema } = app.get(GraphQLSchemaHost);
    const res = await axios.get(`/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});

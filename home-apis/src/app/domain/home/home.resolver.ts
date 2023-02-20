import {
  Resolver,
  Query,
  Args,
  Mutation,
  Parent,
  ResolveField,
  Context,
  ResolveReference,
  Subscription,
} from '@nestjs/graphql';
// import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Home } from '../entity/home.entity';
import { HomeService } from './home.service';
import { PubSub } from '../../PubSub.module';
import { Logger } from '@lead/logger';
import { AdminOnly } from './AdminOnly';
import { Inject } from '@nestjs/common';

@Resolver((of: any) => Home)
export class HomeResolver {
  constructor(
    private homeService: HomeService,
    @Inject(Logger) private readonly logger: Logger,
    private pubSub: PubSub
  ) {}

  @Query()
  @AdminOnly()
  async homes() {
    return await this.homeService.listAll();
  }

  @Query()
  @AdminOnly()
  async findHomes(@Args('name') name: string) {
    return await this.homeService.findHome(name);
  }

  @Query()
  @AdminOnly()
  async activeHomes() {
    return await this.homeService.listAllActiveHomes();
  }

  /*
  ! we are stuck here no solution available 
curl http://localhost:5002/graphql \
  -F operations='{ "query": "mutation ($file: Upload!) { uploadHomePhoto(file: $file) { count } }", "variables": { "file": null } }' \
  -F map='{ "0": ["variables.file"] }' \
  -F 0=@mocha.png

  {"correlationId":"da2434d3-8690-448e-8548-3117c860bb61","level":"error","message":"[Fri May 27 13:30:52 2022] [error] Missing multipart field ‘operations’ (https://github.com/jaydenseric/graphql-multipart-request-spec)."}
  */
  // @Mutation()
  // async uploadHomePhoto(
  //   @Args('file', { type: () => GraphQLUpload }) file: FileUpload,
  // ): Promise<{ id: number }> {
  //   try {
  //     console.log(file)
  //     const { createReadStream } = file;
  //     const stream = createReadStream();
  //     const chunks: any = [];
  //     console.log(stream)

  //     const buffer = await new Promise<Buffer>((resolve, reject) => {
  //       let buffer: Buffer;

  //       stream.on('data', function (chunk) {
  //         chunks.push(chunk);
  //       });

  //       stream.on('end', function () {
  //         buffer = Buffer.concat(chunks);
  //         resolve(buffer);
  //       });

  //       stream.on('error', reject);
  //     });
  //     console.log(buffer);
  //     const base64 = buffer.toString('base64');
  //     // If you want to store the file, this is one way of doing
  //     // it, as you have the file in-memory as Buffer

  //     return { id: base64.length }
  //   } catch (err) {
  //     console.log(err);
  //     return { id: 0 };
  //   }
  // }

  @Query()
  async home(@Args('id') id: string) {
    return await this.homeService.getById(id);
  }

  @Mutation()
  @AdminOnly()
  async createHome(@Args() args: any, @Context() context: any) {
    const { userid } = context.req.headers;

    const x = await this.homeService.createHome(args, userid);
    const msg = {
      topic: 'homeAdded',
      payload: {
        homeAdded: x,
      },
    };
    await this.pubSub.publish(msg.topic, msg.payload);

    return x;
  }

  @Mutation()
  @AdminOnly()
  async updateHome(@Args('id') id: string, @Args() args: any) {
    return await this.homeService.updateHome(id, args);
  }

  @ResolveField('user')
  user(@Parent() home: Home) {
    this.logger.http('ResolveField::user::HomeResolver' + home.user_id);
    return { __typename: 'User', id: home.user_id };
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    this.logger.http('Logging :: ResolveReference :: home');
    return await this.homeService.getByHomeId(reference.id);
  }

  @Subscription('homeAdded', {
    // filter: (payload, variables) =>
    //   payload.homeAdded.id === variables.id,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  homeAdded(@Args('id') id: number) {
    return this.pubSub.asyncIterator('homeAdded');
  }
}

import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Tag } from '@app/tags/tag.entity';
import { TagType } from '@app/tags/tag.type';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Tag])],
      resolvers: [
        {
          DTOClass: TagType,
          EntityClass: Tag,
          update: { many: { disabled: true }, one: { name: 'updateTag' } },
          delete: { many: { disabled: true }, one: { name: 'deleteTag' } },
          create: { many: { disabled: true }, one: { name: 'createTag' } },
          enableSubscriptions: true,
        },
      ],
    }),
  ],
})
export class TagsModule {}

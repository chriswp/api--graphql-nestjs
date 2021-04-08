import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Tag')
export class TagType {
  @Field(() => ID)
  id: number;

  @FilterableField()
  nome: string;

  @Field()
  ativo: boolean;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  deleted_at: Date;
}

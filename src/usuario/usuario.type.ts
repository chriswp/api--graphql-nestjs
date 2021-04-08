import { Field, ID, ObjectType, OmitType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Usuario')
export class UsuarioType {
  @Field(() => ID)
  readonly id: number;

  @Field({ description: 'nome do usuário' })
  readonly nome: string;

  @FilterableField({ description: 'email do usuário' })
  readonly email: string;

  @FilterableField({ description: 'informa se o usuário está ativo' })
  readonly ativo: boolean;

  @Field({ description: 'data que a notícia foi cadastrada' })
  readonly created_at: Date;

  @Field({ description: 'última data que a notícia foi atualizada' })
  readonly updated_at: Date;
}

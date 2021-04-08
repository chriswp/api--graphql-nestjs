import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { NoticiaType } from '@app/noticias/noticia.type';

@ObjectType('Categoria')
@UnPagedRelation('noticias', () => NoticiaType, { disableRemove: true, nullable: true })
export class CategoriaType {
  @Field(() => ID, { description: 'identificador da categoria' })
  id: number;

  @FilterableField({ description: 'nome da categoria' })
  nome!: string;

  @Field({ description: 'data de criação da categoria' })
  created_at: Date;

  @Field({ description: 'data de alteração da categoria' })
  updated_at: Date;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoriaType } from '@app/categorias/categoria.type';
import { FilterableField, Relation, UnPagedRelation } from '@nestjs-query/query-graphql';
import { TagType } from '@app/tags/tag.type';

@ObjectType('Noticia')
@Relation('categoria', () => CategoriaType, { nullable: true, disableRemove: true })
@UnPagedRelation('tags', () => TagType, { nullable: true })
export class NoticiaType {
  @Field(() => ID)
  id: number;

  @FilterableField({ description: 'titulo da notícia' })
  readonly titulo!: string;

  @Field({ description: 'resumo da notícia' })
  readonly descricao!: string;

  @Field({ description: 'conteúdo da notícia' })
  readonly conteudo!: string;

  @FilterableField({ description: 'id da categoria que a notícia pertence' })
  readonly categoria_id: number;

  @FilterableField({ description: 'data de publicação da notícia' })
  readonly data_publicacao: string;

  @FilterableField({ description: 'informa se a notícia está disponível para visualização' })
  readonly ativo: boolean;

  @Field({ description: 'data que a notícia foi cadastrada' })
  readonly created_at: Date;

  @Field({ description: 'última data que a notícia foi atualizada' })
  readonly updated_at: Date;
}

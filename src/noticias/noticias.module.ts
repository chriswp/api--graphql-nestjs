import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Noticia } from '@app/noticias/noticia.entity';
import { NoticiaType } from '@app/noticias/noticia.type';
import { NoticiaCreateInput } from '@app/noticias/noticia-create.input';
import { Categoria } from '@app/categorias/categoria.entity';
import { IsCategoriaExistsValidator } from '@app/categorias/validators/is-categoria-exists.validator';
import { GqlAuthGuard } from '@app/auth/auth.guard';
import { NoticiaResolver } from '@app/noticias/noticia.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Noticia, Categoria])],
      resolvers: [
        {
          DTOClass: NoticiaType,
          EntityClass: Noticia,
          CreateDTOClass: NoticiaCreateInput,
          update: { many: { disabled: true }, one: { name: 'updateNoticia' } },
          delete: { many: { disabled: true }, one: { name: 'deleteNoticia' } },
          create: { many: { disabled: true }, one: { name: 'createNoticia' } },
          enableSubscriptions: true,
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
  providers: [IsCategoriaExistsValidator, NoticiaResolver],
})
export class NoticiasModule {}

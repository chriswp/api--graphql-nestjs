import { Module } from '@nestjs/common';
import { Categoria } from '@app/categorias/categoria.entity';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { CategoriaType } from '@app/categorias/categoria.type';
import { CategoriaCreateInput } from '@app/categorias/categoria-create.input';
import { GqlAuthGuard } from '@app/auth/auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Categoria])],
      resolvers: [
        {
          DTOClass: CategoriaType,
          EntityClass: Categoria,
          CreateDTOClass: CategoriaCreateInput,
          create: { many: { disabled: true }, one: { name: 'createCategoria' } },
          update: { many: { disabled: true }, one: { name: 'updateCategoria' } },
          delete: { many: { disabled: true }, one: { name: 'removeCategoria' } },
          enableSubscriptions: true,
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
})
export class CategoriasModule {}

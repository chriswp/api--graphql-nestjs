import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Usuario } from '@app/usuario/usuario.entity';
import { UsuarioType } from '@app/usuario/usuario.type';
import { UsuarioCreateDto } from '@app/usuario/usuario-create.dto';
import { GqlAuthGuard } from '@app/auth/auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Usuario])],
      resolvers: [
        {
          DTOClass: UsuarioType,
          EntityClass: Usuario,
          CreateDTOClass: UsuarioCreateDto,
          create: { many: { disabled: true }, one: { name: 'createUsuario' } },
          update: { many: { disabled: true }, one: { name: 'updateUsuario' } },
          delete: { many: { disabled: true }, one: { name: 'deleteUsuario' } },
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
})
export class UsuarioModule {}

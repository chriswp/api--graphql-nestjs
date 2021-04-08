import { Resolver } from '@nestjs/graphql';
import { NoticiaType } from '@app/noticias/noticia.type';
import { ReadResolver } from '@nestjs-query/query-graphql';
import { Noticia } from '@app/noticias/noticia.entity';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => NoticiaType)
export class NoticiaResolver extends ReadResolver(NoticiaType) {
  constructor(
    @InjectQueryService(Noticia) readonly service: QueryService<NoticiaType>,
    @InjectRepository(Noticia) private repository: Repository<Noticia>,
  ) {
    super(service);
  }
}

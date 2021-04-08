import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, MinLength, Validate } from 'class-validator';
import { IsCategoriaExistsValidator } from '@app/categorias/validators/is-categoria-exists.validator';

@InputType('NoticiaCreateInput')
export class NoticiaCreateInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly titulo: string;

  @Field()
  @MinLength(15)
  @IsString()
  readonly descricao: string;

  @Field()
  @MinLength(30)
  @IsString()
  readonly conteudo: string;

  @Field()
  @IsNumber()
  @Validate(IsCategoriaExistsValidator)
  readonly categoria_id: number;

  @Field()
  @IsDate()
  readonly data_publicacao: Date;

  @Field()
  @IsBoolean()
  readonly ativo: boolean;
}

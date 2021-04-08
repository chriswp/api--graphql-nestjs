import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CategoriaCreateInput {
  @Field()
  @IsNotEmpty({ message: 'o nome é um campo obrigatório' })
  @IsString()
  readonly nome: string;
}

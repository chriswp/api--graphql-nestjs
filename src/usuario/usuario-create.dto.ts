import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class UsuarioCreateDto {
  @Field()
  @IsNotEmpty()
  @MinLength(5, { message: 'o nome deve possuir ao menos $constraint1 caracteres' })
  readonly nome: string;

  @Field()
  @IsNotEmpty()
  @IsEmail({}, { message: 'o email é obrigatório' })
  readonly email: string;

  @Field()
  @IsBoolean({ message: 'o campo $property deve ser true/false' })
  readonly ativo: boolean;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly senha: string;
}

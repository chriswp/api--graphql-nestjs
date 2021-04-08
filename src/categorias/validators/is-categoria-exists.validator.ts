import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '@app/categorias/categoria.entity';
import { Repository } from 'typeorm';

@ValidatorConstraint({ name: 'categoriaExists', async: false })
@Injectable()
export class IsCategoriaExistsValidator implements ValidatorConstraintInterface {
  constructor(@InjectRepository(Categoria) private repository: Repository<Categoria>) {}

  validate(value: number, args: ValidationArguments): Promise<boolean> {
    return this.repository.findOne({ id: value }).then((categoria) => {
      return categoria != undefined;
    });
  }

  defaultMessage(args: ValidationArguments) {
    return 'a categoria informada não existe';
  }
}

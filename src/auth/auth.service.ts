import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthInput } from '@app/auth/auth.input';
import { AuthType } from '@app/auth/auth.type';
import { Repository } from 'typeorm';
import { Usuario } from '@app/usuario/usuario.entity';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private repository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(credentialsDto: AuthInput): Promise<AuthType> {
    const { email, senha } = credentialsDto;
    const usuario = await this.repository.findOne({ email: email, ativo: true });

    if (usuario && !(await compareSync(senha, usuario.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const jwtPayload = {
      id: usuario.id,
    };
    const token = await this.jwtService.sign(jwtPayload);

    return { token };
  }
}

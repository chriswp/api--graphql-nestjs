import { Module } from '@nestjs/common';
import { AuthService } from '@app/auth/auth.service';
import { AuthResolver } from '@app/auth/auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '@app/usuario/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@app/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES,
        },
      }),
    }),
  ],
  providers: [AuthService, AuthResolver, AuthService, JwtStrategy],
})
export class AuthModule {}

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthInput } from '@app/auth/auth.input';
import { AuthType } from '@app/auth/auth.type';
import { AuthService } from '@app/auth/auth.service';

@Resolver(() => AuthType)
export class AuthResolver {
  constructor(readonly service: AuthService) {}

  @Mutation(() => AuthType)
  async login(@Args('credentials') credentials: AuthInput): Promise<AuthType> {
    return await this.service.signIn(credentials);
  }
}

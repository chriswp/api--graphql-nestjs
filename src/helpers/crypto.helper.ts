import { hashSync } from 'bcrypt';

export const hashPasswordTransform = {
  to(password: string): string {
    return hashSync(password, process.env.PASSWORD_SALT);
  },
  from(hash: string): string {
    return hash;
  },
};

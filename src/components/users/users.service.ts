import { HttpStatus, Injectable } from '@nestjs/common';
import { CustomError } from 'src/errors/customError';

@Injectable()
export class UsersService {
  getUser(id: string | null, email: string | null) {
    if (!id && !email) {
      throw new CustomError('No id or email provided', HttpStatus.BAD_REQUEST);
    }
  }
}

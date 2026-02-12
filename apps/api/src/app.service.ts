import { Injectable } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

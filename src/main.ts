import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(process.env.PORT);
}
bootstrap();

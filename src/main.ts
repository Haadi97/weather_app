import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // this is a comment
  // CONFLICT
  // ANOTHER CONFLICT
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

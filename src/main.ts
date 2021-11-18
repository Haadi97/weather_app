import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // this is a comment
  // CONFLICT
  // ANOTHER CONFLICT
  // here is a comment
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.ORIGIN });
  app.use(helmet());
  await app.listen(process.env.PORT || 3001, () =>
    console.log(`app is running on port ${process.env.PORT || 3001}`),
  );
}
bootstrap();

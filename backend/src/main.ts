import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from './models/users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const swagConfig = new DocumentBuilder()
    .setTitle('Users')
    .setDescription('API for managing our users in Mongo')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const usersDocument = SwaggerModule.createDocument(app, swagConfig, {
    include: [UsersModule],
  });
  SwaggerModule.setup('api/users', app, usersDocument);

  //Added for testing route in development
  //May also use helmet: https://docs.nestjs.com/security/helmet
  //Nest.js security:https://docs.nestjs.com/security/cors
  app.enableCors();

  await app.listen(3000);
}
bootstrap();

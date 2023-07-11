import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //request dto의 유효성 검사
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, //지정한 클래스 속성 따르지 않으면 아예 접근 불가
      transform: true, //request타입을 우리가 설정한 class 타입으로 자동 변환해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();

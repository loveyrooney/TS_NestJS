import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
//ConfigService 옵션은 forRootAsync() 할 때 사용
import { ConfigModule } from '@nestjs/config';
import { config } from './data-source';

@Module({
  //개발한 비스니스 모듈들 여기다 임포트 하고
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      // ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    //forRoot()는 sync이고 단일DB 연결시, forRootAsync()는 async이고 다중DB연결시
    TypeOrmModule.forRoot(config),
    MoviesModule,
  ],
  //여기는 메인만 접근할 수 있게 한다
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

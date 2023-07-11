import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({
  //개발한 비스니스 모듈들 여기다 임포트 하고
  imports: [MoviesModule],
  //여기는 메인만 접근할 수 있게 한다
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
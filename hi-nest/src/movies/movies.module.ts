import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MoviesReporisoty } from './movies.repository';
//레포지토리 클래스를 사용하려면 providers에 넣어줘야 한다.
import { MovieEntity } from './entities/movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}

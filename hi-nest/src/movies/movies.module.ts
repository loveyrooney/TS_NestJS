import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesReporisoty } from './movies.repository';
import { Movie } from './entities/movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesReporisoty, MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}

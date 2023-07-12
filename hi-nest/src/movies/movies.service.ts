import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDTO } from './dto/create.movie.dto';
import { MoviesReporisoty } from './movies.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesReporisoty: MoviesReporisoty,
  ) {}

  // getAll(): Movie[] {
  //   return this.movies;
  // }

  async getOne(id: number): Promise<Movie> {
    const movie = await this.moviesReporisoty.findOneBy({ id: id });
    if (!movie) {
      throw new NotFoundException(`movie with ID ${id} not found.`);
    }
    return movie;
  }
  // getOne(id: number): Movie {
  //   const movie = this.movies.find((movie) => movie.id === id);
  //   if (!movie) {
  //     throw new NotFoundException(`movie with ID ${id} not found.`);
  //   }
  //   return movie;
  // }

  // deleteOne(id: number) {
  //   this.getOne(id);
  //   this.movies = this.movies.filter((movie) => movie.id !== id);
  // }

  // create(movieData: CreateMovieDTO) {
  //   this.movies.push({
  //     id: this.movies.length + 1,
  //     ...movieData,
  //   });
  // }

  // update(id: number, updateData) {
  //   const movie = this.getOne(id);
  //   this.deleteOne(id);
  //   this.movies.push({ ...movie, ...updateData });
  // }
}

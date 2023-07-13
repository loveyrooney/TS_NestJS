import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMovieDTO } from './dto/create.movie.dto';
import { MoviesReporisoty } from './movies.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { genres } from './movies.genres';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesReporisoty: MoviesReporisoty,
  ) {}

  async gelAll(): Promise<Movie[]> {
    const movies = await this.moviesReporisoty.find();
    return movies;
  }
  // getAll(): Movie[] {
  //   return this.movies;
  // }

  async getOne(id: number): Promise<Movie> {
    const movie = await this.moviesReporisoty.findOne({ where: { id: id } });
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

  async deleteOne(id: number): Promise<void> {
    const find = await this.getOne(id);
    const result = await this.moviesReporisoty.remove(find);
    console.log(result);
  }
  // deleteOne(id: number) {
  //   this.getOne(id);
  //   this.movies = this.movies.filter((movie) => movie.id !== id);
  // }

  async create(createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const count = await this.moviesReporisoty.count();
    const { title, year } = createMovieDTO;
    const movie = await this.moviesReporisoty.create({
      id: count + 1,
      title,
      year,
      genres: genres.ACTION,
    });
    await this.moviesReporisoty.save(movie);
    return movie;
  }
  // create(movieData: CreateMovieDTO) {
  //   this.movies.push({
  //     id: this.movies.length + 1,
  //     ...movieData,
  //   });
  // }

  async update(id: number, updateMovieDTO: CreateMovieDTO): Promise<Movie> {
    await this.deleteOne(id);
    const newdata = await this.create(updateMovieDTO);
    return newdata;
  }
  // update(id: number, updateData) {
  //   const movie = this.getOne(id);
  //   this.deleteOne(id);
  //   this.movies.push({ ...movie, ...updateData });
  // }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { MovieEntity } from './entities/movies.entity';
import { CreateMovieDTO } from './dto/create.movie.dto';
// import { MoviesReporisoty } from './movies.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { genres } from './movies.genres';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    //레포지토리 클래스를 임포트해 그것을 타입으로 줄 수도 있고, 지금처럼 typeORM의 Repository 타입으로 임포트할 수도 있다.
    @InjectRepository(MovieEntity)
    private readonly moviesReporisoty: Repository<MovieEntity>,
  ) {}

  async gelAll(): Promise<MovieEntity[]> {
    const movies = await this.moviesReporisoty.find();
    return movies;
  }
  // getAll(): Movie[] {
  //   return this.movies;
  // }

  async getOne(id: number): Promise<MovieEntity> {
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

  async create(createMovieDTO: CreateMovieDTO): Promise<MovieEntity> {
    const { title, year } = createMovieDTO;
    const movie = await this.moviesReporisoty.create({
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

  async update(
    id: number,
    updateMovieDTO: CreateMovieDTO,
  ): Promise<MovieEntity> {
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

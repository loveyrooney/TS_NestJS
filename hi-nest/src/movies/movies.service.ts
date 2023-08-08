import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { MovieEntity } from '../entities/movies.entity';
import { CreateMovieDTO } from './MovieDTO/create.movie.dto';
// import { MoviesReporisoty } from './movies.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { genres } from './movies.genres';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  //레포지토리 클래스를 임포트해 그것을 타입으로 줄 수도 있고, 지금처럼 typeORM의 Repository 타입으로 임포트할 수도 있다.
  constructor(
    @InjectRepository(MovieEntity)
    private readonly moviesRepository: Repository<MovieEntity>,
  ) {}

  async getAll(): Promise<MovieEntity[]> {
    const movies = await this.moviesRepository.find();
    return movies;
  }
  // getAll(): Movie[] {
  //   return this.movies;
  // }

  async getOne(id: number): Promise<MovieEntity> {
    const movie = await this.moviesRepository.findOne({ where: { id: id } });
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
    const result = await this.moviesRepository.remove(find);
    console.log(result);
  }
  // deleteOne(id: number) {
  //   this.getOne(id);
  //   this.movies = this.movies.filter((movie) => movie.id !== id);
  // }

  async create(createMovieDTO: CreateMovieDTO): Promise<MovieEntity> {
    const { title, year, director } = createMovieDTO;
    const movie = await this.moviesRepository.create({
      title,
      year,
      director,
      genres: genres.ACTION,
    });
    try {
      await this.moviesRepository.save(movie);
    } catch (e) {
      if (e.code === '23505')
        throw new ConflictException('Already existed movie');
      else throw new InternalServerErrorException();
    }

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

import { CreateMovieDTO } from './MovieDTO/create.movie.dto';
import { MovieEntity } from '../entities/movies.entity';
import { MoviesService } from './movies.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies') //괄호 안이 라우터 역할을 함
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Promise<MovieEntity[]> {
    return this.moviesService.getAll();
  }
  // @Get()
  // getAll(): Movie[] {
  //   return this.moviesService.getAll();
  // }

  // @Get('search')
  // search(@Query('year') year: number) {
  //   return `we are going to search a movie made after : ${year}`;
  // }

  @Get('/:id')
  getOne(@Param('id') id: number): Promise<MovieEntity> {
    return this.moviesService.getOne(id);
  }
  // @Get('/:id')
  // getOne(@Param('id') id: number): Movie {
  //   return this.moviesService.getOne(id);
  // }
  @Post()
  create(@Body() createMovieDTO: CreateMovieDTO): Promise<MovieEntity> {
    console.log(createMovieDTO);
    return this.moviesService.create(createMovieDTO);
  }
  // @Post()
  // create(@Body() movieData: CreateMovieDTO) {
  //   console.log(movieData);
  //   return this.moviesService.create(movieData);
  // }
  @Delete('/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.moviesService.deleteOne(id);
  }
  // @Delete('/:id')
  // remove(@Param('id') id: number) {
  //   return this.moviesService.deleteOne(id);
  // }

  @Patch('/:id')
  patch(
    @Param('id') id: number,
    @Body() updateData: CreateMovieDTO,
  ): Promise<MovieEntity> {
    return this.moviesService.update(id, updateData);
  }
  // @Patch('/:id')
  // patch(@Param('id') id: number, @Body() updateData: UpdateMovieDTO) {
  //   return this.moviesService.update(id, updateData);
  // }
}

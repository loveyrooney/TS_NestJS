import { CreateMovieDTO } from './dto/create.movie.dto';
import { UpdateMovieDTO } from './dto/update.movie.dto';
import { Movie } from './entities/movies.entity';
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
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') year: number) {
    return `we are going to search a movie made after : ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    console.log(movieData);
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(id, updateData);
  }
}

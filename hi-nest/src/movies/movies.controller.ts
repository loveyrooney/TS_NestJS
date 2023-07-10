import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies') //괄호 안이 라우터 역할을 함
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this will return one movie with the id : ${id}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `this will delete a movie with the id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `this will update a movie with the id: ${id}`;
  }
}

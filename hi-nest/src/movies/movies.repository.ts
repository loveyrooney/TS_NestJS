import { Repository } from 'typeorm';
import { Movie } from './entities/movies.entity';

export class MoviesReporisoty extends Repository<Movie> {}

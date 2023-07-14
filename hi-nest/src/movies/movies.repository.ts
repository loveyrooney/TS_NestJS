import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movies.entity';

export class MoviesReporisoty extends Repository<MovieEntity> {}

//레포지토리 클래스를 만들지 않고도 레포지토리 라는 타입으로 typeORM에서 임포트해 사용할 수 있다.
//참고용으로 남겨둠

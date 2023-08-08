import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { genres } from '../movies/movies.genres';
@Entity({ name: 'mymovie' })
//name은 DB테이블 이름을 넣어주면 된다.(대소문자 구분함) 엔티티 클래스명은 TableEntity 형태로 쓰는 것이 나을 듯.
@Unique(['title', 'year'])
export class MovieEntity extends BaseEntity {
  static of(params: Partial<MovieEntity>): MovieEntity {
    const movie = new MovieEntity();
    Object.assign(movie, params);

    return movie;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  director: string;

  @Column()
  genres: genres;
}

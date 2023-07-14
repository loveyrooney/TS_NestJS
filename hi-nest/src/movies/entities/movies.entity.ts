import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { genres } from '../movies.genres';
@Entity({ name: 'movie' })
//name은 DB테이블 이름을 넣어주면 된다.(대소문자 구분함) 엔티티 클래스명은 TableEntity 형태로 쓰는 것이 나을 듯.
export class MovieEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  genres: genres;
}

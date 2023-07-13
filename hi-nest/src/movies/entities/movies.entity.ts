import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { genres } from '../movies.genres';
@Entity()
export class Movie extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  genres: genres;
}

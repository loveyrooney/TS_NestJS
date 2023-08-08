import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { genres } from '../movies.genres';

export class GenresValidationPipe implements PipeTransform {
  readonly GenresOption = [
    genres.ACTION,
    genres.HISTORY,
    genres.LOVE,
    genres.FANTASY,
    genres.DRAMA,
    genres.COMEDY,
    genres.CRIME,
  ];

  //transform 함수의 두번째 인자 metadata: ArgumentMetadata
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isGenresValid(value)) {
      throw new BadRequestException(`${value} isn't in the genre options.`);
    }
    return value;
  }

  private isGenresValid(genres: any) {
    const index = this.GenresOption.indexOf(genres);
    return index !== -1;
  }
}

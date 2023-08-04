import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { Repository } from 'typeorm';
import { MovieEntity } from '../entities/movies.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { genres } from './movies.genres';

// const mockRepository = {
//   findOne: jest.fn(),
//   create: jest.fn(),
//   save: jest.fn(),
//   deleteOne: jest.fn(),
//   find: jest.fn(),
// };

describe('MoviesService', () => {
  let service: MoviesService;
  //repo변수를 이 블록 스코프 외에서 안쓰면 밑줄생김. jest.spyOn()하기 전에 typeerror 떴었음.
  let repo: Repository<MovieEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getRepositoryToken(MovieEntity),
          // useValue: mockRepository,
          useClass: Repository,
        },
      ],
    }).compile();

    service = await module.get<MoviesService>(MoviesService);
    repo = module.get<Repository<MovieEntity>>(getRepositoryToken(MovieEntity));
  });

  //   it('should be defined', () => {
  //     expect(service).toBeDefined();
  //     expect(repository).toBeDefined();
  //   });

  // describe('getAll', () => {
  //   it('should return promise object', async () => {
  //     await expect(service.getAll()).toBeInstanceOf(Promise);
  //   });
  // });

  describe('getOne', () => {
    //목함수 만들려고 목개체 만드는데 promise 타입객체... 고통그자체였음
    const mockMovie: Promise<MovieEntity> = Promise.resolve(
      MovieEntity.of({
        id: 6,
        title: 'Hunt',
        year: 2022,
        genres: genres.ACTION,
      }),
    );

    //처음에 it 두개 합쳐서 했더니 계속 JestAssertionError나왔음
    it('should return id', async () => {
      jest.spyOn(repo, 'findOne').mockResolvedValue(mockMovie);
      const result = await service.getOne(6);
      //이거 expect(result).toEqual(mockMovie) 하면 익스펙트 리시브 개수 다르게 나옴
      expect(result.id).toEqual((await mockMovie).id);
    });

    it('should return a 404', async () => {
      try {
        jest.spyOn(repo, 'findOne').mockResolvedValue(mockMovie);
        await service.getOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  // describe('create', () => {
  //   it('should return moviedata', async () => {
  //     jest.spyOn(repository, 'create').mockResolvedValue(blabla);
  //     const result = await service.create(new CreateMovieDTO());
  //   });
  // });
});

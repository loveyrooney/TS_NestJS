import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movies.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

const mockRepository = {
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  deleteOne: jest.fn(),
  find: jest.fn(),
};

// type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('MoviesService', () => {
  let service: MoviesService;
  let repository: Repository<MovieEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getRepositoryToken(MovieEntity),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = await module.get<MoviesService>(MoviesService);
    repository = await module.get<Repository<MovieEntity>>(
      getRepositoryToken(MovieEntity),
    );
  });

  //   it('should be defined', () => {
  //     expect(service).toBeDefined();
  //     expect(repository).toBeDefined();
  //   });

  describe('getAll', () => {
    it('should return promise object', async () => {
      //   const result = jest
      //     .spyOn(repository, 'findOne')
      //     .mockRejectedValue({ id: 6 } as MovieEntity);
      expect(service.getAll()).toBeInstanceOf(Promise);
    });
  });

  describe('getOne', () => {
    it('should return id', async () => {
      expect(service.getOne(6)).toEqual(6);
    });
    it('should return a 404', async () => {
      try {
        service.getOne(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});

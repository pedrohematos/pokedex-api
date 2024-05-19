import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PokemonResponseDtoMock } from './mocks/pokemon-response-dto.mock';
import { PokemonTranslatedResponseDtoMock } from './mocks/pokemon-translated-response-dto.mock';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';

describe('SpeciesController', () => {
  let speciesController: SpeciesController;
  let speciesService: SpeciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeciesController],
      providers: [
        {
          provide: SpeciesService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(PokemonResponseDtoMock),
            findOneWithTranslation: jest
              .fn()
              .mockResolvedValue(PokemonTranslatedResponseDtoMock),
          },
        },
      ],
    }).compile();

    speciesController = module.get<SpeciesController>(SpeciesController);
    speciesService = module.get<SpeciesService>(SpeciesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(speciesController).toBeDefined();
    expect(speciesService).toBeDefined();
  });

  describe('getPokemon', () => {
    it('should return Pokémon information', async () => {
      const result = await speciesController.getPokemon({
        name: PokemonResponseDtoMock.name,
      });

      expect(result).toEqual(PokemonResponseDtoMock);
      expect(speciesService.findOne).toHaveBeenCalledTimes(1);
    });

    it('should throw an HTTP exception if the Pokémon is not found', async () => {
      jest
        .spyOn(speciesService, 'findOne')
        .mockRejectedValue(
          new HttpException('Pokémon not found.', HttpStatus.NOT_FOUND),
        );

      await expect(
        speciesController.getPokemon({ name: 'unknownpokemon' }),
      ).rejects.toThrow(
        new HttpException('Pokémon not found.', HttpStatus.NOT_FOUND),
      );
    });

    it('should throw an HTTP exception if there is an internal server error', async () => {
      jest
        .spyOn(speciesService, 'findOne')
        .mockRejectedValue(
          new HttpException(
            'Internal server error.',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
        );

      await expect(
        speciesController.getPokemon({ name: 'existingpokemon' }),
      ).rejects.toThrow(
        new HttpException(
          'Internal server error.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });

  describe('getTranslatedPokemon', () => {
    it('should return Pokémon information with translated description', async () => {
      const result = await speciesController.getTranslatedPokemon({
        name: PokemonTranslatedResponseDtoMock.name,
      });

      expect(result).toEqual(PokemonTranslatedResponseDtoMock);
      expect(speciesService.findOneWithTranslation).toHaveBeenCalledTimes(1);
    });

    it('should throw an HTTP exception if the Pokémon is not found', async () => {
      jest
        .spyOn(speciesService, 'findOneWithTranslation')
        .mockRejectedValue(
          new HttpException('Pokémon not found.', HttpStatus.NOT_FOUND),
        );

      await expect(
        speciesController.getTranslatedPokemon({ name: 'unknownpokemon' }),
      ).rejects.toThrow(
        new HttpException('Pokémon not found.', HttpStatus.NOT_FOUND),
      );
    });

    it('should throw an HTTP exception if there is an internal server error', async () => {
      jest
        .spyOn(speciesService, 'findOneWithTranslation')
        .mockRejectedValue(
          new HttpException(
            'Internal server error.',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
        );

      await expect(
        speciesController.getTranslatedPokemon({ name: 'existingpokemon' }),
      ).rejects.toThrow(
        new HttpException(
          'Internal server error.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
    });
  });
});

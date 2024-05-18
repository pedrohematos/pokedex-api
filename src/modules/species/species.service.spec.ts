import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { PokemonSpeciesApiAxiosOkMock } from './mocks/pokemon-species-api.mock';
import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  let service: SpeciesService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpeciesService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SpeciesService>(SpeciesService);
    httpService = module.get<HttpService>(HttpService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return Pokémon information', async () => {
      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));

      const result = await service.findOne(pokemonData.name);

      expect(result.name).toEqual(pokemonData.name);
      expect(result.description).toEqual(
        pokemonData.flavor_text_entries[0].flavor_text,
      );
      expect(result.habitat).toEqual(pokemonData.habitat.name);
      expect(result.isLegendary).toEqual(pokemonData.is_legendary);
    });

    it('should throw an error if Pokémon is not found', async () => {
      const pokemonName = 'unknownpokemon';

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(
          throwError(() => ({ response: { status: HttpStatus.NOT_FOUND } })),
        );

      const getNotFoundPokemon = async () => {
        try {
          await service.findOne(pokemonName);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.status).toEqual(HttpStatus.NOT_FOUND);
          expect(error.response.message).toEqual(['Pokémon not found.']);
        }
      };

      await expect(getNotFoundPokemon()).resolves.toBeUndefined();
    });

    it('should throw an error if failed to communicate with external Pokémon API', async () => {
      const pokemonName = 'bulbasaur';

      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        throwError(() => ({
          response: { status: HttpStatus.BAD_REQUEST },
        })),
      );

      const getPokemon = async () => {
        try {
          await service.findOne(pokemonName);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
          expect(error.response.message[0]).toContain(
            'Failed to communicate with external API',
          );
        }
      };

      await expect(getPokemon()).resolves.toBeUndefined();
    });
  });
});

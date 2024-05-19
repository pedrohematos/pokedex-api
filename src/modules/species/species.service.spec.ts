import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { TranslationTypeEnum } from './enums/translation-type.enum';
import { PokemonSpeciesApiAxiosOkMock } from './mocks/pokemon-species-api.mock';
import { TranslatedTextApiAxiosOkMock } from './mocks/text-translation-api.mock';
import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  let speciesService: SpeciesService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpeciesService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
            post: jest.fn(),
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

    speciesService = module.get<SpeciesService>(SpeciesService);
    httpService = module.get<HttpService>(HttpService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(speciesService).toBeDefined();
  });

  describe('findOne', () => {
    it('should return Pokémon information', async () => {
      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));

      const result = await speciesService.findOne(pokemonData.name);

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
          await speciesService.findOne(pokemonName);
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
          await speciesService.findOne(pokemonName);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
          expect(error.response.message[0]).toContain(
            'Failed to communicate with external Pokémon API',
          );
        }
      };

      await expect(getPokemon()).resolves.toBeUndefined();
    });
  });

  describe('findOneWithTranslation', () => {
    it('should return Pokémon information with translated description', async () => {
      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;
      const translatedTextData = TranslatedTextApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));

      jest
        .spyOn(httpService, 'post')
        .mockReturnValueOnce(of(TranslatedTextApiAxiosOkMock));

      const result = await speciesService.findOneWithTranslation(
        pokemonData.name,
      );

      expect(result.name).toEqual(pokemonData.name);
      expect(result.description).toEqual(
        translatedTextData.contents.translated,
      );
      expect(result.habitat).toEqual(pokemonData.habitat.name);
      expect(result.isLegendary).toEqual(pokemonData.is_legendary);
      expect(result.translation).toEqual(TranslationTypeEnum.YODA);
    });

    it('should return Pokémon information with Yoda translation for Pokémon in cave habitat', async () => {
      PokemonSpeciesApiAxiosOkMock.data.habitat.name = 'cave';

      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;
      const translatedTextData = TranslatedTextApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));
      jest
        .spyOn(httpService, 'post')
        .mockReturnValueOnce(of(TranslatedTextApiAxiosOkMock));

      const result = await speciesService.findOneWithTranslation(
        pokemonData.name,
      );

      expect(result.name).toEqual(pokemonData.name);
      expect(result.description).toEqual(
        translatedTextData.contents.translated,
      );
      expect(result.habitat).toEqual(pokemonData.habitat.name);
      expect(result.isLegendary).toEqual(pokemonData.is_legendary);
      expect(result.translation).toEqual(TranslationTypeEnum.YODA);
    });

    it('should return Pokémon information with Yoda translation for legendary Pokémon', async () => {
      PokemonSpeciesApiAxiosOkMock.data.is_legendary = true;

      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;
      const translatedTextData = TranslatedTextApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));
      jest
        .spyOn(httpService, 'post')
        .mockReturnValueOnce(of(TranslatedTextApiAxiosOkMock));

      const result = await speciesService.findOneWithTranslation(
        pokemonData.name,
      );

      expect(result.name).toEqual(pokemonData.name);
      expect(result.description).toEqual(
        translatedTextData.contents.translated,
      );
      expect(result.habitat).toEqual(pokemonData.habitat.name);
      expect(result.isLegendary).toEqual(pokemonData.is_legendary);
      expect(result.translation).toEqual(TranslationTypeEnum.YODA);
    });

    it('should return Pokémon information with Shakespeare translation for Pokémon not in cave habitat and not legendary', async () => {
      PokemonSpeciesApiAxiosOkMock.data.habitat.name = `forest`;
      PokemonSpeciesApiAxiosOkMock.data.is_legendary = false;

      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;
      const translatedTextData = TranslatedTextApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));
      jest
        .spyOn(httpService, 'post')
        .mockReturnValueOnce(of(TranslatedTextApiAxiosOkMock));

      const result = await speciesService.findOneWithTranslation(
        pokemonData.name,
      );

      expect(result.name).toEqual(pokemonData.name);
      expect(result.description).toEqual(
        translatedTextData.contents.translated,
      );
      expect(result.habitat).toEqual(pokemonData.habitat.name);
      expect(result.isLegendary).toEqual(pokemonData.is_legendary);
      expect(result.translation).toEqual(TranslationTypeEnum.SHAKESPEARE);
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
          await speciesService.findOneWithTranslation(pokemonName);
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
          await speciesService.findOneWithTranslation(pokemonName);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
          expect(error.response.message[0]).toContain(
            'Failed to communicate with external Pokémon API',
          );
        }
      };

      await expect(getPokemon()).resolves.toBeUndefined();
    });

    it('should throw an error if too many requests are sent to the Translation API', async () => {
      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));

      jest.spyOn(httpService, 'post').mockReturnValueOnce(
        throwError(() => ({
          response: { status: HttpStatus.TOO_MANY_REQUESTS },
        })),
      );

      const getPokemon = async () => {
        try {
          await speciesService.findOneWithTranslation(pokemonData.name);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.status).toEqual(HttpStatus.TOO_MANY_REQUESTS);
          expect(error.response.message[0]).toContain(
            'Failed to communicate with external Translation API',
          );
        }
      };

      await expect(getPokemon()).resolves.toBeUndefined();
    });

    it('should throw an error if failed to communicate with external Translation API', async () => {
      const pokemonData = PokemonSpeciesApiAxiosOkMock.data;

      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(of(PokemonSpeciesApiAxiosOkMock));

      jest.spyOn(httpService, 'post').mockReturnValueOnce(
        throwError(() => ({
          response: { status: HttpStatus.BAD_REQUEST },
        })),
      );

      const getPokemon = async () => {
        try {
          await speciesService.findOneWithTranslation(pokemonData.name);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
          expect(error.response.message[0]).toContain(
            'Failed to communicate with external Translation API',
          );
        }
      };

      await expect(getPokemon()).resolves.toBeUndefined();
    });
  });
});

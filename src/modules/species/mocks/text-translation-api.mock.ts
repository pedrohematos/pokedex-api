import { AxiosResponse } from 'axios';
import { TranslatedTextApiResponse } from '../interfaces/translated-text-api-response';

export const TranslatedTextApiResponseMock: TranslatedTextApiResponse = {
  success: {
    total: 1,
  },
  contents: {
    translated:
      'It carries let it fire thunderbolts at will,  the rain clouds.That it descended with lightning,  they say.',
    text: 'The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.',
    translation: 'yoda',
  },
};

export const TranslatedTextApiAxiosOkMock: AxiosResponse<
  TranslatedTextApiResponse,
  any
> = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {
    headers: undefined,
  },
  data: TranslatedTextApiResponseMock,
};

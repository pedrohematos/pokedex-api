export interface TranslatedTextApiResponse {
  success: Success;
  contents: Contents;
}

interface Success {
  total: number;
}

interface Contents {
  translated: string;
  text: string;
  translation: string;
}

# Pokedex API 🐉

## Description 📄

The Pokedex API is an API for retrieving primary Pokémon information. It allows you to obtain detailed data about Pokémon species, including a translated description into specific styles like Yoda and Shakespeare.

This application was built using [Node.js](https://nodejs.org/), [NestJS](https://nestjs.com/), and [TypeScript](https://www.typescriptlang.org/).

## Features ✨

- Retrieve information about a Pokémon species by name.
- Retrieve information about a Pokémon species by name with a translated description.

## Dependencies 📦

The Pokedex API depends on the following external APIs:

- [PokeAPI](https://pokeapi.co/): Used to fetch Pokémon species information.
- [FunTranslations API](https://api.funtranslations.com): Used to translate Pokémon descriptions into specific styles (Yoda and Shakespeare).

## Requirements 🛠️

- Node.js
- npm (Node Package Manager)

## Installation 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/pedrohematos/pokedex-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pokedex-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration ⚙️

### .env File

Create a `.env` file in the root of the project based on the provided `.env.example` file:

### Environment Variables

- **NODE_ENV**: The application runtime environment (`development`, `homolog`, `production`).
- **APPLICATION_PORT**: The port on which the application will run.
- **API_KEY**: API key required to access the protected endpoints.
- **POKEAPI_BASE_URL**: Base URL of the PokeAPI.
- **FUNTRANSLATIONS_BASE_URL**: Base URL of the FunTranslations API.

## Running the Application ▶️

### Development

To start the application in development mode:

```bash
npm run start
```

Watch mode:

```bash
npm run start:dev
```

### Production

To build and start the application in production mode:

```bash
npm run build
```

```bash
npm run start:prod
```

## API Documentation 📚

The API documentation is automatically generated by [Swagger](https://swagger.io). To access the interactive documentation, follow these steps:

1. Start the application.
2. Open your browser and navigate to: `POKEDEX_API_BASE_URL`/api

**Note:** If you are using the `.env` file with the default values from `.env.example`, your application will be available at [http://localhost:3000](http://localhost:3000). To access the Swagger documentation, go to [http://localhost:3000/api](http://localhost:3000/api) in your browser.

### Example Endpoints 🌟

#### Get Pokémon Species Information

```bash
GET /species/{name}
```

**Description:** Retrieves detailed information about a Pokémon species by its name, including a treatment process to normalize the description text. The treatment process follows these rules:

- Page breaks are treated just like newlines.
- Soft hyphens followed by newlines vanish.
- Letter-hyphen-newline becomes letter-hyphen, to preserve real hyphenation.
- Any other newline becomes a space.

**Parameters:**

- `name` (string) - Name of the Pokémon species.

**Response:** `200 OK`

Returns a `PokemonResponseDto` object with the Pokémon species information.

```json
{
  "name": "blastoise",
  "description": "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.",
  "habitat": "waters-edge",
  "isLegendary": false
}
```

#### Get Translated Pokémon Species Information

```bash
GET /species/{name}/translated
```

**Description:** Retrieves detailed information about a Pokémon species by its name, including a translated description. If the Pokémon's habitat is a `cave` or if the Pokémon is `legendary`, the description will be translated using `Yoda` style. Otherwise, it will be translated using `Shakespeare` style. Prior to translation, the description undergoes normalization as part of the GET /species/{name} endpoint.

**Note:** Due to limitations in the FunTranslations API, this endpoint currently supports only `10 requests per hour`. When the limit is reached, the API returns a '429 Too Many Requests' error.

**Parameters:**

- `name` (string) - Name of the Pokémon species.

**Response:** `200 OK`

Returns a `PokemonTranslatedResponseDto` object with the species information, including the translated description.

```json
{
  "name": "blastoise",
  "description": "A brutal pokémon with pressurized water jets on its shell. They art did lay-to for high speed tackles.",
  "habitat": "waters-edge",
  "isLegendary": false,
  "translation": "shakespeare"
}
```

### Error Response Structure ⚠️

Any error returned will have the following format:

```json
{
  "message": [
    "The name must not be larger than 100 characters.",
    "The name must only contain letters, spaces, or hyphens."
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

Where,

- **message:** An array of messages detailing the errors encountered.
- **error:** A brief description of the error type.
- **statusCode:** The HTTP status code of the error response.

## Available Scripts 📜

- `build`: Compiles the TypeScript project.
- `format`: Formats the code using Prettier.
- `start`: Starts the application.
- `start:dev`: Starts the application in development mode.
- `start:debug`: Starts the application in debug mode.
- `start:prod`: Starts the application in production mode.
- `lint`: Runs ESLint to check for code issues.
- `test`: Runs unit tests.
- `test:watch`: Runs unit tests in watch mode.
- `test:cov`: Runs unit tests and generates a coverage report.
- `test:debug`: Runs unit tests in debug mode.
- `test:e2e`: Runs end-to-end tests.

## Possible Improvements 🔧

- **Caching**: Implement caching mechanisms to improve response times and reduce load on external APIs.
- **GraphQL Integration**: Integrate GraphQL for fetching data from the PokeAPI to request only the necessary fields, optimizing performance and reducing data transfer. This should be added once GraphQL support is available and out of beta.
- **CI/CD Pipeline**: Set up a continuous integration and continuous deployment (CI/CD) pipeline to automate testing and deployment processes.
- **Logging and Monitoring**: Integrate logging and monitoring tools to track application performance and diagnose issues in real-time.
- **Enhanced Authentication**: Implement a more secure authentication system than the current x-api-key approach, such as OAuth2 or JWT.
- **Modularization**: Refactor and modularize the codebase for external API calls to improve maintainability and scalability.
- **Testing**: Expand the test suite to include more comprehensive unit tests and integration tests.
- **Documentation Enhancements**: Improve API documentation with more detailed examples, use cases, and error handling scenarios.

## Contact 📞

I hope this documentation helps you set up and use the Pokedex API efficiently. For any questions or issues, feel free to reach out.

- **Name**: Pedro Matos
- **Website**: [pedromatos.me](https://pedromatos.me/)
- **Email**: pedrohematos@outlook.com

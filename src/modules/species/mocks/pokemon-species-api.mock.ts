import { AxiosResponse } from 'axios';
import { PokemonSpeciesApiResponse } from '../interfaces/pokemon-species-api-response';

export const PokemonSpeciesApiResponseMock: PokemonSpeciesApiResponse = {
  base_happiness: 35,
  capture_rate: 3,
  color: {
    name: 'yellow',
    url: 'https://pokeapi.co/api/v2/pokemon-color/10/',
  },
  egg_groups: [
    {
      name: 'no-eggs',
      url: 'https://pokeapi.co/api/v2/egg-group/15/',
    },
  ],
  evolution_chain: {
    url: 'https://pokeapi.co/api/v2/evolution-chain/123/',
  },
  evolves_from_species: null,
  flavor_text_entries: [
    {
      flavor_text:
        'The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'gold',
        url: 'https://pokeapi.co/api/v2/version/4/',
      },
    },
    {
      flavor_text:
        'A POKéMON that\nraces across the\nland while barking\fa cry that sounds\nlike crashing\nthunder.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'silver',
        url: 'https://pokeapi.co/api/v2/version/5/',
      },
    },
    {
      flavor_text:
        'This rough POKéMON\nstores energy\ninside its body,\fthen sweeps across\nthe land, shooting\noff electricity.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'crystal',
        url: 'https://pokeapi.co/api/v2/version/6/',
      },
    },
    {
      flavor_text:
        'RAIKOU embodies the speed of lightning.\nThe roars of this POKéMON send shock\nwaves shuddering through the air and\fshake the ground as if lightning bolts\nhad come crashing down.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'ruby',
        url: 'https://pokeapi.co/api/v2/version/7/',
      },
    },
    {
      flavor_text:
        'RAIKOU embodies the speed of lightning.\nThe roars of this POKéMON send shock\nwaves shuddering through the air and\fshake the ground as if lightning bolts\nhad come crashing down.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      flavor_text:
        'RAIKOU embodies the speed of lightning.\nIts roars send shock waves shuddering\nthrough the air and ground as if\nlightning bolts were crashing down.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'emerald',
        url: 'https://pokeapi.co/api/v2/version/9/',
      },
    },
    {
      flavor_text:
        'This POKéMON races across the\nland while barking a cry that sounds\nlike crashing thunder.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      flavor_text:
        'The rain clouds it carries let it fire\nthunderbolts at will. They say that it\ndescended with lightning.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'pearl',
        url: 'https://pokeapi.co/api/v2/version/13/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      flavor_text:
        'The rain clouds it carries let it\nfire thunderbolts at will. They say\nthat it descended with lightning.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      flavor_text:
        'A Pokémon that races across the\nland while barking a cry that sounds\nlike crashing thunder.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      flavor_text:
        'On prétend qu’il est tombé avec la\nfoudre. Il peut lancer des éclairs\ngrâce aux nuages sur son dos.',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version: {
        name: 'black',
        url: 'https://pokeapi.co/api/v2/version/17/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'black',
        url: 'https://pokeapi.co/api/v2/version/17/',
      },
    },
    {
      flavor_text:
        'On prétend qu’il est tombé avec la\nfoudre. Il peut lancer des éclairs\ngrâce aux nuages sur son dos.',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version: {
        name: 'white',
        url: 'https://pokeapi.co/api/v2/version/18/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'white',
        url: 'https://pokeapi.co/api/v2/version/18/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      flavor_text:
        'It is said to have fallen with\nlightning. It can fire thunderbolts\nfrom the rain clouds on its back.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
    {
      flavor_text:
        'あまぐもを　せおっているので\nどんなときでも　かみなりを　だせる。\nかみなりとともに　おちてきたという。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        '비구름을 짊어지고 있어서\n어떤 때라도 번개를 칠 수 있다.\n번개와 함께 떨어졌다고 한다.',
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        'Le nuage de pluie qu’il porte peut relâcher la foudre\nà volonté. On dit de lui qu’il est venu avec l’orage.',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        'Die Regenwolken, die es trägt, ermöglichen es ihm,\nGewitter zu erzeugen. Es strotzt vor Blitzen.',
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        'Las nubes de lluvia que lleva le permiten lanzar rayos\na voluntad. Dicen que apareció con un rayo.',
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        'Grazie alle nubi di pioggia che ha con sé lancia\nfulmini a volontà. Pare che sia arrivato con un lampo.',
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        'The rain clouds it carries let it fire thunderbolts\nat will. They say that it descended with lightning.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        '雨雲を　背負っているので\nどんなときでも　雷を　出せる。\n雷とともに　落ちてきたという。',
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      version: {
        name: 'x',
        url: 'https://pokeapi.co/api/v2/version/23/',
      },
    },
    {
      flavor_text:
        'たいないで　うずまく　ちからを\nでんげきとして　だしながら　だいちを\nかけめぐる　あらあらしい　ポケモン。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        '체내에서 들끓는 힘을\n전격으로 내보내면서 대지를\n달리는 난폭한 포켓몬이다.',
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        'Ce terrible Pokémon emmagasine de l’énergie puis\ncourt en lançant de puissants éclairs.',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        'Dieses aggressive Pokémon speichert Energie\nin seinem Körper und entlädt sie, wenn es über\ndas Land streift.',
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        'Este duro Pokémon almacena energía en su cuerpo.\nDespués, cuando se desplaza por tierra, la suelta.',
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        'Pokémon violento che accumula energia nel corpo\ne poi corre all’impazzata, scaricando elettricità.',
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        'This rough Pokémon stores energy inside its body,\nthen sweeps across the land, shooting\noff electricity.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        '体内で　渦巻く　力を\n電撃として　出しながら　大地を\n駆け巡る　荒々しい　ポケモン。',
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      version: {
        name: 'y',
        url: 'https://pokeapi.co/api/v2/version/24/',
      },
    },
    {
      flavor_text:
        'かみなりの　スピードを　やどした　ポケモン。\nその　とおぼえは　かみなりが　おちた　ときの\nように　くうきを　ふるわせ　だいちを　ゆるがす。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        '번개의 스피드가 깃들어 있는 포켓몬이다.\n그 울음소리는 번개가 내리쳤을 때처럼\n공기를 떨리게 하며 대지를 흔든다.',
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Raikou incarne la vitesse de l’éclair. Les rugissements de\nce Pokémon libèrent des ondes de choc provenant du ciel\net frappant le sol avec la puissance de la foudre.',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Raikou ist so schnell wie der Blitz. Das Gebrüll dieses\nPokémon sendet Schockwellen aus, die wie Donnerschläge\ndurch die Luft beben und den Boden erschüttern.',
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Raikou tiene la velocidad del rayo. Los rugidos de este\nPokémon emiten ondas de choque que se esparcen vibrando\npor el aire y sacuden el suelo como si fueran auténticas\ndescargas de rayo.',
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Raikou rappresenta la velocità del fulmine. Il suo ruggito crea\nterrificanti onde d’urto nell’aria e scuote il suolo come se\nfosse percosso dalla furia di un fulmine durante il temporale.',
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Raikou embodies the speed of lightning. The roars of this\nPokémon send shock waves shuddering through the air\nand shake the ground as if lightning bolts had come\ncrashing down.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        '雷の　スピードを　宿した　ポケモン。\nその　遠ぼえは　雷が　落ちた　ときの\nように　空気を　震わせ　大地を　揺るがす。',
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'かみなりの　スピードを　やどした　ポケモン。\nその　とおぼえは　かみなりが　おちた　ときの\nように　くうきを　ふるわせ　だいちを　ゆるがす。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        '번개의 스피드가 깃들어 있는 포켓몬이다.\n그 울음소리는 번개가 내리쳤을 때처럼\n공기를 떨리게 하며 대지를 흔든다.',
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Raikou incarne la vitesse de l’éclair. Les rugissements de\nce Pokémon libèrent des ondes de choc provenant du ciel\net frappant le sol avec la puissance de la foudre.',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Raikou ist so schnell wie der Blitz. Das Gebrüll dieses\nPokémon sendet Schockwellen aus, die wie Donnerschläge\ndurch die Luft beben und den Boden erschüttern.',
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Raikou tiene la velocidad del rayo. Los rugidos de este\nPokémon emiten ondas de choque que se esparcen vibrando\npor el aire y sacuden el suelo como si fueran auténticas\ndescargas de rayo.',
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Raikou rappresenta la velocità del fulmine. Il suo ruggito crea\nterrificanti onde d’urto nell’aria e scuote il suolo come se\nfosse percosso dalla furia di un fulmine durante il temporale.',
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Raikou embodies the speed of lightning. The roars of\nthis Pokémon send shock waves shuddering through the\nair and shake the ground as if lightning bolts had come\ncrashing down.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        '雷の　スピードを　宿した　ポケモン。\nその　遠ぼえは　雷が　落ちた　ときの\nように　空気を　震わせ　大地を　揺るがす。',
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
  ],
  form_descriptions: [],
  forms_switchable: false,
  gender_rate: -1,
  genera: [
    {
      genus: 'いかずちポケモン',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
    },
    {
      genus: '우뢰포켓몬',
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
    },
    {
      genus: '天雷寶可夢',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
    },
    {
      genus: 'Pokémon Foudre',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
    },
    {
      genus: 'Donner-Pokémon',
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
    },
    {
      genus: 'Pokémon Trueno',
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
    },
    {
      genus: 'Pokémon Tuono',
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
    },
    {
      genus: 'Thunder Pokémon',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
    {
      genus: 'いかずちポケモン',
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
    },
    {
      genus: '天雷宝可梦',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
    },
  ],
  generation: {
    name: 'generation-ii',
    url: 'https://pokeapi.co/api/v2/generation/2/',
  },
  growth_rate: {
    name: 'slow',
    url: 'https://pokeapi.co/api/v2/growth-rate/1/',
  },
  habitat: {
    name: 'grassland',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
  },
  has_gender_differences: false,
  hatch_counter: 80,
  id: 243,
  is_baby: false,
  is_legendary: true,
  is_mythical: false,
  name: 'raikou',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'ライコウ',
    },
    {
      language: {
        name: 'roomaji',
        url: 'https://pokeapi.co/api/v2/language/2/',
      },
      name: 'Raikou',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '라이코',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '雷公',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Raikou',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Raikou',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Raikou',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Raikou',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Raikou',
    },
    {
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      name: 'ライコウ',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '雷公',
    },
  ],
  order: 268,
  pal_park_encounters: [
    {
      area: {
        name: 'mountain',
        url: 'https://pokeapi.co/api/v2/pal-park-area/3/',
      },
      base_score: 90,
      rate: 3,
    },
  ],
  pokedex_numbers: [
    {
      entry_number: 243,
      pokedex: {
        name: 'national',
        url: 'https://pokeapi.co/api/v2/pokedex/1/',
      },
    },
    {
      entry_number: 238,
      pokedex: {
        name: 'original-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/3/',
      },
    },
    {
      entry_number: 243,
      pokedex: {
        name: 'updated-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/7/',
      },
    },
  ],
  shape: {
    name: 'quadruped',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
  },
  varieties: [
    {
      is_default: true,
      pokemon: {
        name: 'raikou',
        url: 'https://pokeapi.co/api/v2/pokemon/243/',
      },
    },
  ],
};

export const PokemonSpeciesApiAxiosOkMock: AxiosResponse<
  PokemonSpeciesApiResponse,
  any
> = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {
    headers: undefined,
  },
  data: PokemonSpeciesApiResponseMock,
};

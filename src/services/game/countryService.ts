import _ from 'lodash';

import Continent from '../../models/Continent';

const ContinentTypes = Continent.getContinentTypes();

const CountryTypes: {[key: string]: string} = {
  // North America
  CANADA: 'CANADA',
  YUKON: 'YUKON',
  OREGON: 'OREGON',
  NEW_YORK: 'NEW_YORK',
  ALASKA: 'ALASKA',
  MEXICO: 'MEXICO',
  CALIFORNIA: 'CALIFORNIA',
  GREENLAND: 'GREENLAND',
  TERRANOVA: 'TERRANOVA',
  LABRADOR: 'LABRADOR',
  // South America
  COLOMBIA: 'COLOMBIA',
  PERU: 'PERU',
  BRASIL: 'BRASIL',
  ARGENTINA: 'ARGENTINA',
  CHILE: 'CHILE',
  URUGUAY: 'URUGUAY',
  // Oceania
  AUSTRALIA: 'AUSTRALIA',
  JAVA: 'JAVA',
  SUMATRA: 'SUMATRA',
  BORNEO: 'BORNEO',
  // Africa
  SAHARA: 'SAHARA',
  SOUTH_AFRICA: 'SOUTH_AFRICA',
  MADAGASCAR: 'MADAGASCAR',
  ZAIRE: 'ZAIRE',
  ETHIOPIA: 'ETHIOPIA',
  EGYPT: 'EGYPT',
  // Europe
  ICELAND: 'ICELAND',
  UK: 'UK',
  SPAIN: 'SPAIN',
  ITALY: 'ITALY',
  FRANCE: 'FRANCE',
  GERMANY: 'GERMANY',
  POLAND: 'POLAND',
  RUSIA: 'RUSIA',
  SWEDEN: 'SWEDEN',
  // Asia
  ARAL: 'ARAL',
  TARTARIA: 'TARTARIA',
  TAIMIR: 'TAIMIR',
  SIBERIA: 'SIBERIA',
  KAMCHATKA: 'KAMCHATKA',
  JAPAN: 'JAPAN',
  MONGOLIA: 'MONGOLIA',
  IRAN: 'IRAN',
  GOBI: 'GOBI',
  CHINA: 'CHINA',
  MALASIA: 'MALASIA',
  INDIA: 'INDIA',
  TURKEY: 'TURKEY',
  ISRAEL: 'ISRAEL',
  ARABIA: 'ARABIA',
};

const Countries = [
  // North America
  {
    id: CountryTypes.CANADA,
    name: 'Canada',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.YUKON,
    name: 'Yukon',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.OREGON,
    name: 'Oregon',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.NEW_YORK,
    name: 'Nueva York',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.ALASKA,
    name: 'Alaska',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.MEXICO,
    name: 'Mexico',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.CALIFORNIA,
    name: 'California',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.GREENLAND,
    name: 'Greenland',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.TERRANOVA,
    name: 'Terranova',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  {
    id: CountryTypes.LABRADOR,
    name: 'Labrador',
    continent: ContinentTypes.NORTH_AMERICA,
  },
  // South America
  {
    id: CountryTypes.COLOMBIA,
    name: 'Colombia',
    continent: ContinentTypes.SOUTH_AMERICA,
  },
  {
    id: CountryTypes.PERU,
    name: 'Peru',
    continent: ContinentTypes.SOUTH_AMERICA,
  },
  {
    id: CountryTypes.BRASIL,
    name: 'Brasil',
    continent: ContinentTypes.SOUTH_AMERICA,
  },
  {
    id: CountryTypes.ARGENTINA,
    name: 'Argentina',
    continent: ContinentTypes.SOUTH_AMERICA,
  },
  {
    id: CountryTypes.CHILE,
    name: 'Chile',
    continent: ContinentTypes.SOUTH_AMERICA,
  },
  {
    id: CountryTypes.URUGUAY,
    name: 'Uruguay',
    continent: ContinentTypes.SOUTH_AMERICA,
  },
  // Oceania
  {
    id: CountryTypes.AUSTRALIA,
    name: 'Australia',
    continent: ContinentTypes.OCEANIA,
  },
  { id: CountryTypes.JAVA, name: 'Java', continent: ContinentTypes.OCEANIA },
  {
    id: CountryTypes.SUMATRA,
    name: 'Sumatra',
    continent: ContinentTypes.OCEANIA,
  },
  {
    id: CountryTypes.BORNEO,
    name: 'Borneo',
    continent: ContinentTypes.OCEANIA,
  },
  // Africa
  { id: CountryTypes.SAHARA, name: 'Sahara', continent: ContinentTypes.AFRICA },
  {
    id: CountryTypes.SOUTH_AFRICA,
    name: 'Sudafrica',
    continent: ContinentTypes.AFRICA,
  },
  {
    id: CountryTypes.MADAGASCAR,
    name: 'Madagascar',
    continent: ContinentTypes.AFRICA,
  },
  { id: CountryTypes.ZAIRE, name: 'Zaire', continent: ContinentTypes.AFRICA },
  {
    id: CountryTypes.ETHIOPIA,
    name: 'Etiopia',
    continent: ContinentTypes.AFRICA,
  },
  { id: CountryTypes.EGYPT, name: 'Egipto', continent: ContinentTypes.AFRICA },
  // Europe
  {
    id: CountryTypes.ICELAND,
    name: 'Islandia',
    continent: ContinentTypes.EUROPE,
  },
  {
    id: CountryTypes.UK,
    name: 'Gran Bretania',
    continent: ContinentTypes.EUROPE,
  },
  { id: CountryTypes.SPAIN, name: 'Espania', continent: ContinentTypes.EUROPE },
  { id: CountryTypes.ITALY, name: 'Italia', continent: ContinentTypes.EUROPE },
  {
    id: CountryTypes.FRANCE,
    name: 'Francia',
    continent: ContinentTypes.EUROPE,
  },
  {
    id: CountryTypes.GERMANY,
    name: 'Alemania',
    continent: ContinentTypes.EUROPE,
  },
  {
    id: CountryTypes.POLAND,
    name: 'Polonia',
    continent: ContinentTypes.EUROPE,
  },
  { id: CountryTypes.RUSIA, name: 'Rusia', continent: ContinentTypes.EUROPE },
  { id: CountryTypes.SWEDEN, name: 'Suecia', continent: ContinentTypes.EUROPE },
  // Asia
  { id: CountryTypes.ARAL, name: 'Aral', continent: ContinentTypes.ASIA },
  {
    id: CountryTypes.TARTARIA,
    name: 'Tartaria',
    continent: ContinentTypes.ASIA,
  },
  { id: CountryTypes.TAIMIR, name: 'Taimir', continent: ContinentTypes.ASIA },
  { id: CountryTypes.SIBERIA, name: 'Siberia', continent: ContinentTypes.ASIA },
  {
    id: CountryTypes.KAMCHATKA,
    name: 'Kamchatka',
    continent: ContinentTypes.ASIA,
  },
  { id: CountryTypes.JAPAN, name: 'Japon', continent: ContinentTypes.ASIA },
  {
    id: CountryTypes.MONGOLIA,
    name: 'Mongolia',
    continent: ContinentTypes.ASIA,
  },
  { id: CountryTypes.IRAN, name: 'Iran', continent: ContinentTypes.ASIA },
  { id: CountryTypes.GOBI, name: 'Gobi', continent: ContinentTypes.ASIA },
  { id: CountryTypes.CHINA, name: 'China', continent: ContinentTypes.ASIA },
  { id: CountryTypes.MALASIA, name: 'Malasia', continent: ContinentTypes.ASIA },
  { id: CountryTypes.INDIA, name: 'India', continent: ContinentTypes.ASIA },
  { id: CountryTypes.TURKEY, name: 'Turquia', continent: ContinentTypes.ASIA },
  { id: CountryTypes.ISRAEL, name: 'Israel', continent: ContinentTypes.ASIA },
  { id: CountryTypes.ARABIA, name: 'Arabia', continent: ContinentTypes.ASIA },
];

const Neighbours: {[key: string]: string[]} = {
  // South America
  ARGENTINA: ['CHILE', 'PERU', 'BRASIL', 'URUGUAY'],
  CHILE: ['ARGENTINA', 'PERU', 'AUSTRALIA'],
  PERU: ['COLOMBIA', 'BRASIL', 'ARGENTINA', 'CHILE'],
  COLOMBIA: ['MEXICO', 'BRASIL', 'PERU'],
  BRASIL: ['COLOMBIA', 'PERU', 'ARGENTINA', 'SAHARA', 'URUGUAY'],
  URUGUAY: ['BRASIL', 'ARGENTINA'],
  // North America
  MEXICO: ['COLOMBIA', 'CALIFORNIA'],
  CALIFORNIA: ['MEXICO', 'OREGON', 'NEW_YORK'],
  OREGON: ['CALIFORNIA', 'ALASKA', 'YUKON', 'CANADA', 'NEW_YORK'],
  NEW_YORK: ['CALIFORNIA', 'OREGON', 'CANADA', 'TERRANOVA', 'GREENLAND'],
  ALASKA: ['OREGON', 'YUKON', 'KAMCHATKA'],
  YUKON: ['ALASKA', 'OREGON', 'CANADA'],
  CANADA: ['YUKON', 'OREGON', 'NEW_YORK', 'TERRANOVA'],
  TERRANOVA: ['NEW_YORK', 'CANADA', 'LABRADOR'],
  LABRADOR: ['TERRANOVA', 'GREENLAND'],
  GREENLAND: ['LABRADOR', 'NEW_YORK', 'ICELAND'],
  // Europe
  ICELAND: ['GREENLAND', 'SWEDEN', 'UK'],
  UK: ['ICELAND', 'GERMANY', 'SPAIN'],
  SPAIN: ['SAHARA', 'FRANCE', 'UK'],
  FRANCE: ['SPAIN', 'ITALY', 'GERMANY'],
  ITALY: ['FRANCE', 'GERMANY'],
  GERMANY: ['ITALY', 'FRANCE', 'UK', 'POLAND'],
  POLAND: ['GERMANY', 'RUSIA', 'TURKEY', 'EGYPT'],
  RUSIA: ['POLAND', 'IRAN', 'TURKEY', 'SWEDEN', 'ARAL'],
  SWEDEN: ['RUSIA', 'ICELAND'],
  // Africa
  SAHARA: ['SPAIN', 'BRASIL', 'ZAIRE', 'EGYPT', 'ETHIOPIA'],
  ZAIRE: ['SAHARA', 'ETHIOPIA', 'SOUTH_AFRICA', 'MADAGASCAR'],
  ETHIOPIA: ['ZAIRE', 'SOUTH_AFRICA', 'SAHARA', 'EGYPT'],
  SOUTH_AFRICA: ['ZAIRE', 'ETHIOPIA'],
  EGYPT: ['ETHIOPIA', 'SAHARA', 'MADAGASCAR', 'ISRAEL', 'TURKEY', 'POLAND'],
  MADAGASCAR: ['EGYPT', 'ZAIRE'],
  // Oceania
  AUSTRALIA: ['CHILE', 'JAVA', 'BORNEO', 'SUMATRA'],
  JAVA: ['AUSTRALIA'],
  BORNEO: ['MALASIA', 'AUSTRALIA'],
  SUMATRA: ['AUSTRALIA', 'INDIA'],
  // Asia
  INDIA: ['MALASIA', 'CHINA', 'IRAN', 'SUMATRA'],
  MALASIA: ['BORNEO', 'INDIA', 'CHINA'],
  CHINA: [
    'INDIA',
    'MALASIA',
    'IRAN',
    'GOBI',
    'JAPAN',
    'MONGOLIA',
    'SIBERIA',
    'KAMCHATKA',
  ],
  IRAN: ['CHINA', 'RUSIA', 'INDIA', 'GOBI', 'MONGOLIA', 'ARAL', 'TURKEY'],
  TURKEY: ['IRAN', 'RUSIA', 'POLAND', 'EGYPT', 'ISRAEL', 'ARABIA'],
  ISRAEL: ['TURKEY', 'ARABIA', 'EGYPT'],
  ARABIA: ['ISRAEL', 'TURKEY'],
  ARAL: ['IRAN', 'RUSIA', 'MONGOLIA', 'SIBERIA', 'TARTARIA'],
  TARTARIA: ['ARAL', 'TAIMIR', 'SIBERIA'],
  TAIMIR: ['TARTARIA', 'SIBERIA'],
  SIBERIA: ['ARAL', 'MONGOLIA', 'CHINA', 'KAMCHATKA', 'TAIMIR', 'TARTARIA'],
  KAMCHATKA: ['SIBERIA', 'CHINA', 'JAPAN', 'ALASKA'],
  JAPAN: ['KAMCHTAKA', 'CHINA'],
  MONGOLIA: ['ARAL', 'SIBERIA', 'CHINA', 'GOBI', 'IRAN'],
  GOBI: ['MONGOLIA', 'IRAN', 'CHINA'],
};

class CountryService {
  static getCountryContinent(country: any) {
    const countryElement = _.find(Countries, (obj) => obj.id === country);
    if (countryElement) {
      return countryElement.continent;
    }

    return null;
  }

  static canAttack(source: any, target: any) {
    // Same player
    if (source.state.player.color === target.state.player.color) {
      return false;
    }

    // Not enough troops
    if (source.state.troops <= 1) {
      return false;
    }

    return CountryService.areNeighbours(source.countryKey, target.countryKey);
  }

  static areNeighbours(source: any, target: any) {
    return Neighbours[source].includes(target);
  }

  static getNeighbours(country: any) {
    return Neighbours[country];
  }
}

export default CountryService;

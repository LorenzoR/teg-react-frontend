import Continent from './Continent';
import Player from './Player';
import shuffleArray from '../helpers/shuffleArray';
import CountryService from 'src/services/game/countryService';

const ContinentTypes = Continent.getContinentTypes();
const playerTypes = Player.getPlayerTypes();

// List of missions
const Missions: {[key: string]: any} = {
  AFRICA_NORTH_AMERICA_5_EUROPE_4: {
    text: 'Ocupar África, 5 países de América del Norte y 4 países de Europa.',
    continents: [
      { id: ContinentTypes.AFRICA, countries: 6 },
      { id: ContinentTypes.NORTH_AMERICA, countries: 5 },
      { id: ContinentTypes.EUROPE, countries: 4 },
    ],
  },
  SOUTH_AMERICA_EUROPE_7_NEIGHBOURS_3: {
    text:
      'Ocupar América del Sur, 7 países de Europa y 3 países limítrofes entre sí en cualquier lugar del mapa.',
    neighbours: 3,
    continents: [
      { id: ContinentTypes.SOUTH_AMERICA, countries: 6 },
      { id: ContinentTypes.EUROPE, countries: 7 },
    ],
  },
  ASIA_SOUTH_AMERICA_2: {
    text: 'Ocupar Asia y 2 países de América del Sur.',
    continents: [
      { id: ContinentTypes.ASIA, countries: 15 },
      { id: ContinentTypes.SOUTH_AMERICA, countries: 2 },
    ],
  },
  EUROPE_ASIA_4_SOUTH_AMERICA_2: {
    text: 'Ocupar Europa, 4 países de Asia y 2 países de América del Sur.',
    continents: [
      { id: ContinentTypes.EUROPE, countries: 9 },
      { id: ContinentTypes.ASIA, countries: 4 },
      { id: ContinentTypes.SOUTH_AMERICA, countries: 2 },
    ],
  },
  NORTH_AMERICA_OCEANIA_2_ASIA_4: {
    text: 'Ocupar América del Norte, 2 países de Oceanía y 4 de Asia.',
    continents: [
      { id: ContinentTypes.NORTH_AMERICA, countries: 10 },
      { id: ContinentTypes.OCEANIA, countries: 2 },
      { id: ContinentTypes.ASIA, countries: 4 },
    ],
  },
  OCEANIA_2_AFRICA_2_SOUTH_AMERICA_2_EUROPE_3_NORTH_AMERICA_4_ASIA_3: {
    text:
      'Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur, 3 países de Europa, 4 de América del Norte y 3 de Asia.',
    continents: [
      { id: ContinentTypes.OCEANIA, countries: 2 },
      { id: ContinentTypes.AFRICA, countries: 2 },
      { id: ContinentTypes.SOUTH_AMERICA, countries: 2 },
      { id: ContinentTypes.EUROPE, countries: 3 },
      { id: ContinentTypes.NORTH_AMERICA, countries: 4 },
      { id: ContinentTypes.ASIA, countries: 3 },
    ],
  },
  OCEANIA_NORTH_AMERICA_EUROPE_2: {
    text: 'Ocupar Oceanía, América del Norte y 2 países de Europa.',
    continents: [
      { id: ContinentTypes.NORTH_AMERICA, countries: 10 },
      { id: ContinentTypes.OCEANIA, countries: 4 },
      { id: ContinentTypes.EUROPE, countries: 2 },
    ],
  },
  SOUTH_AMERICA_AFRICA_ASIA_4: {
    text: 'Ocupar América del Sur, África y 4 países de Asia.',
    continents: [
      { id: ContinentTypes.SOUTH_AMERICA, countries: 6 },
      { id: ContinentTypes.AFRICA, countries: 6 },
      { id: ContinentTypes.ASIA, countries: 4 },
    ],
  },
  OCEANIA_AFRICA_NORTH_AMERICA_5: {
    text: 'Ocupar Oceanía, África y 5 países de América del Norte.',
    continents: [
      { id: ContinentTypes.NORTH_AMERICA, countries: 5 },
      { id: ContinentTypes.OCEANIA, countries: 4 },
      { id: ContinentTypes.AFRICA, countries: 6 },
    ],
  },
  DESTROY_BLUE: {
    text:
      'Destruir el ejército azul, de ser imposible al jugador de la derecha.',
    destroy: playerTypes.BLUE,
  },
  DESTROY_RED: {
    text:
      'Destruir al ejército rojo, de ser imposible al jugador de la derecha.',
    destroy: playerTypes.RED,
  },
  DESTROY_BLACK: {
    text:
      'Destruir al ejército negro, de ser imposible al jugador de la derecha.',
    destroy: playerTypes.BLACK,
  },
  DESTROY_YELLOW: {
    text:
      'Destruir al ejército amarillo, de ser imposible al jugador de la derecha.',
    destroy: playerTypes.YELLOW,
  },
  DESTROY_GREEN: {
    text:
      'Destruir al ejército verde, de ser imposible al jugador de la derecha.',
    destroy: playerTypes.GREEN,
  },
  DESTROY_PINK: {
    text:
      'Destruir al ejército magenta, de ser imposible al jugador de la derecha.',
    destroy: playerTypes.PINK,
  },
};

class Mission {
  static getMissions() {
    return Missions;
  }

  static getRandomMissions(missionCount: number) {
    const shuffledMissionKeys = shuffleArray(Object.keys(Missions));
    const missions = [];

    while (missionCount) {
      const mission = Missions[shuffledMissionKeys[--missionCount]];
      missions.push(mission);
    }

    return missions;
  }

  static missionCompleted(mission: any, countries: any) {
    // If conqueres countries === 30 then mission completed
    const countriesPerContinent = Mission.getConqueredCountriesByContinent(
      countries,
    );

    if (mission.destroy) {
      // Destroy mission
    } else {
      let hasNeighbours;

      if (mission.neighbours) {
        // Count neighbours
        hasNeighbours = Mission.hasCommonNeighbours(countries, mission.neighbours);
      } else {
        // We don't need this so set to true
        hasNeighbours = true;
      }

      if (mission.continents) {
        mission.continents.forEach((continent: any) => {
          if (countriesPerContinent[continent.id] < continent.countries) {
            return false;
          }
        });
      }

      return hasNeighbours && true;
    }
  }

  static hasCommonNeighbours(countries: any, count: number) {
    // Should have at least 'count' countries
    if (countries.length < count) {
      return false;
    }

    for (let i = 0; i < countries.length; i += 1) {
      const firstLevelNeighbours = CountryService.getNeighbours(
        countries[i].countryKey,
      );

      for (let j = 0; j < firstLevelNeighbours.length; j += 1) {
        // if (_.find(countries, (o) => firstLevelNeighbours[j] === o.countryKey)) {
        if (firstLevelNeighbours[j] === countries[1].countryKey) {
          const secondLevelNeighbours = CountryService.getNeighbours(
            firstLevelNeighbours[j],
          );

          for (let k = 0; k < secondLevelNeighbours.length; k += 1) {
            if (secondLevelNeighbours[k] === countries[2].countryKey) {
              const thirdLevelNeighbours = CountryService.getNeighbours(
                secondLevelNeighbours[k],
              );

              for (let l = 0; l < thirdLevelNeighbours.length; l += 1) {
                if (thirdLevelNeighbours[l] === countries[0].countryKey) {
                  return true;
                }
              }
            }
          }
        }
      }
    }

    return false;
  }

  static getConqueredCountriesByContinent(countries: any) {
    const countriesPerContinent: {[key: string]: any} = {};
    const continentKeys = Object.keys(ContinentTypes);

    // Initialize counters
    continentKeys.forEach((key) => {
      countriesPerContinent[key] = 0;
    });

    countries.forEach((country: any) => {
      const index = CountryService.getCountryContinent(country.countryKey);
      if (index) {
        countriesPerContinent[index]++;
      }
    });

    return countriesPerContinent;
  }
}

export default Mission;

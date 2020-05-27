const Continents = {
  AFRICA: "africa",
  EUROPE: "europe",
  SOUTH_AMERICA: "southAmerica",
  NORTH_AMERICA: "northAmerica",
  ASIA: "asia",
  OCEANIA: "oceania",
};

// List of missions
const Missions = {
  AFRICA_NORTH_AMERICA_5_EUROPE_4: {
    text: "Ocupar África, 5 países de América del Norte y 4 países de Europa.",
    continents: [
        { continent: Continents.AFRICA, countries: 6 },
        { continent: Continents.NORTH_AMERICA, countries: 5 },
        { continent: Continents.EUROPE, countries: 4 },
      ],
  },
  SOUTH_AMERICA_EUROPE_7_NEIGHBOURS_3: {
    text:
      "Ocupar América del Sur, 7 países de Europa y 3 países limítrofes entre sí en cualquier lugar del mapa.",
    neighbours: 3,
    continents: [
        { continent: Continents.SOUTH_AMERICA, countries: 6 },
        { continent: Continents.EUROPE, countries: 7 },
      ],
  },
  ASIA_SOUTH_AMERICA_2: {
    text: "Ocupar Asia y 2 países de América del Sur.",
    continents: [
      { continent: Continents.ASIA, countries: 15 },
      { continent: Continents.SOUTH_AMERICA, countries: 2 },
    ],
  },
  EUROPE_ASIA_4_SOUTH_AMERICA_2: {
    text: "Ocupar Europa, 4 países de Asia y 2 países de América del Sur.",
    continents: [
      { continent: Continents.EUROPE, countries: 9 },
      { continent: Continents.ASIA, countries: 4 },
      { continent: Continents.SOUTH_AMERICA, countries: 2 },
    ],
  },
  NORTH_AMERICA_OCEANIA_2_ASIA_4: {
    text: "Ocupar América del Norte, 2 países de Oceanía y 4 de Asia.",
    continents: [
      { continent: Continents.NORTH_AMERICA, countries: 10 },
      { continent: Continents.OCEANIA, countries: 2 },
      { continent: Continents.ASIA, countries: 4 },
    ],
  },
  OCEANIA_2_AFRICA_2_SOUTH_AMERICA_2_EUROPE_3_NORTH_AMERICA_4_ASIA_3: {
    text:
      "Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur, 3 países de Europa, 4 de América del Norte y 3 de Asia.",
    continents: [
      { continent: Continents.OCEANIA, countries: 2 },
      { continent: Continents.AFRICA, countries: 2 },
      { continent: Continents.SOUTH_AMERICA, countries: 2 },
      { continent: Continents.EUROPE, countries: 3 },
      { continent: Continents.NORTH_AMERICA, countries: 4 },
      { continent: Continents.ASIA, countries: 3 },
    ],
  },
  OCEANIA_NORTH_AMERICA_EUROPE_2: {
    text: "Ocupar Oceanía, América del Norte y 2 países de Europa.",
    continents: [
      { continent: Continents.NORTH_AMERICA, countries: 10 },
      { continent: Continents.OCEANIA, countries: 4 },
      { continent: Continents.EUROPE, countries: 2 },
    ],
  },
  SOUTH_AMERICA_AFRICA_ASIA_4: {
    text: "Ocupar América del Sur, África y 4 países de Asia.",
    continents: [
      { continent: Continents.SOUTH_AMERICA, countries: 6 },
      { continent: Continents.AFRICA, countries: 6 },
      { continent: Continents.ASIA, countries: 4 },
    ],
  },
  OCEANIA_AFRICA_NORTH_AMERICA_5: {
    text: "Ocupar Oceanía, África y 5 países de América del Norte.",
    continents: [
      { continent: Continents.NORTH_AMERICA, countries: 5 },
      { continent: Continents.OCEANIA, countries: 4 },
      { continent: Continents.AFRICA, countries: 6 },
    ],
  },
  DESTROY_BLUE: {
    text:
      "Destruir el ejército azul, de ser imposible al jugador de la derecha.",
    destroy: "blue",
  },
  DESTROY_RED: {
    text:
      "Destruir al ejército rojo, de ser imposible al jugador de la derecha.",
    destroy: "red",
  },
  DESTROY_BLACK: {
    text:
      "Destruir al ejército negro, de ser imposible al jugador de la derecha.",
    destroy: "black",
  },
  DESTROY_YELLOW: {
    text:
      "Destruir al ejército amarillo, de ser imposible al jugador de la derecha.",
    destroy: "yellow",
  },
  DESTROY_GREEN: {
    text:
      "Destruir al ejército verde, de ser imposible al jugador de la derecha.",
    destroy: "green",
  },
  DESTROY_PINK: {
    text:
      "Destruir al ejército magenta, de ser imposible al jugador de la derecha.",
    destroy: "pink",
  },
};

class Mission {
  static getMissions() {
    return Missions;
  }

  static missionCompleted(mission, countries) {

  }

  static getConqueredCountriesByContinent(countries) {

  }
}

export default Mission;

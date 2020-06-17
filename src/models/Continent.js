const ContinentTypes = {
    AFRICA: 'AFRICA',
    EUROPE: 'EUROPE',
    SOUTH_AMERICA: 'SOUTH_AMERICA',
    NORTH_AMERICA: 'NORTH_AMERICA',
    ASIA: 'ASIA',
    OCEANIA: 'OCEANIA',
};

const Continents = {
    AFRICA: {
      name: "africa",
      bonus: 3,
    },
    EUROPE: {
      name: "europe",
      bonus: 5,
    },
    SOUTH_AMERICA: {
      name: "southAmerica",
      bonus: 3,
    },
    NORTH_AMERICA: {
      name: "northAmerica",
      bonus: 5,
    },
    OCEANIA: {
      name: "oceania",
      bonus: 2,
    },
    ASIA: {
      name: "asia",
      bonus: 7,
    },
  };

class Continent {
    static getContinentTypes() {
        return ContinentTypes;
    }

    static getAllContinents() {
      return Continents;
    }
}

export default Continent;
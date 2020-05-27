const ContinentEnum = {
    AFRICA: 'africa',
    EUROPE: 'europe',
    SOUTH_AMERICA: 'southAmerica',
    NORTH_AMERICA: 'northAmerica',
    ASIA: 'asia',
    OCEANIA: 'oceania',
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
    static getContinents() {
        return ContinentEnum;
    }
}

export default Continent;
const Neighbours = {
  // South America
  ARGENTINA: ["CHILE", "PERU", "BRASIL", "URUGUAY"],
  CHILE: ["ARGENTINA", "PERU", "AUSTRALIA"],
  PERU: ["COLOMBIA", "BRASIL", "ARGENTINA", "CHILE"],
  COLOMBIA: ["MEXICO", "BRASIL", "PERU"],
  BRASIL: ["COLOMBIA", "PERU", "ARGENTINA", "SAHARA", "URUGUAY"],
  URUGUAY: ["BRASIL", "ARGENTINA"],
  // North America
  MEXICO: ["COLOMBIA", "CALIFORNIA"],
  CALIFORNIA: ["MEXICO", "OREGON", "NEW_YORK"],
  OREGON: ["CALIFORNIA", "ALASKA", "YUKON", "CANADA", "NEW_YORK"],
  NEW_YORK: ["CALIFORNIA", "OREGON", "CANADA", "TERRANOVA", "GREENLAND"],
  ALASKA: ["OREGON", "YUKON", "KAMCHATKA"],
  YUKON: ["ALASKA", "OREGON", "CANADA"],
  CANADA: ["YUKON", "OREGON", "NEW_YORK", "TERRANOVA"],
  TERRANOVA: ["NEW_YORK", "CANADA", "LABRADOR"],
  LABRADOR: ["TERRANOVA", "GREENLAND"],
  GREENLAND: ["LABRADOR", "NEW_YORK", "ICELAND"],
  // Europe
  ICELAND: ["GREENLAND", "SWEDEN", "UK"],
  UK: ["ICELAND", "GERMANY", "SPAIN"],
  SPAIN: ["SAHARA", "FRANCE", "UK"],
  FRANCE: ["SPAIN", "ITALY", "GERMANY"],
  ITALY: ["FRANCE", "GERMANY"],
  GERMANY: ["ITALY", "FRANCE", "UK", "POLAND"],
  POLAND: ["GERMANY", "RUSIA", "TURKEY", "EGYPT"],
  RUSIA: ["POLAND", "IRAN", "TURKEY", "SWEDEN", "ARAL"],
  SWEDEN: ["RUSIA", "ICELAND"],
  // Africa
  SAHARA: ["SPAIN", "BRASIL", "ZAIRE", "EGYPT", "EHTIOPIA"],
  ZAIRE: ["SAHARA", "ETHIOPIA", "SOUTH_AFRICA", "MADAGASCAR"],
  ETHIOPIA: ["ZAIRE", "SOUTH_AFRICA", "SAHARA", "EGYPT"],
  SOUTH_AFRICA: ["ZAIRE", "ETHIOPIA"],
  EGYPT: ["ETHIOPIA", "SAHARA", "MADAGASCAR", "ISRAEL", "TURKEY", "POLAND"],
  // Oceania
  AUSTRALIA: ["CHILE", "JAVA", "BORNEO", "SUMATRA"],
  JAVA: ["AUSTRALIA"],
  BORNEO: ["MALASIA", "AUSTRALIA"],
  SUMATRA: ["AUSTRALIA", "INDIA"],
  // Asia
  INDIA: ["AUSTRALIA", "MALASIA", "CHINA", "IRAN"],
  MALASIA: ["AUSTRALIA", "INDIA", "CHINA"],
  CHINA: [
    "INDIA",
    "MALASIA",
    "IRAN",
    "GOBI",
    "JAPAN",
    "MONGOLIA",
    "SIBERIA",
    "KAMCHATKA",
  ],
  IRAN: ["CHINA", "RUSIA", "INDIA", "GOBI", "MONGOLIA", "ARAL", "TURKEY"],
  TURKEY: ["IRAN", "RUSIA", "POLAND", "EGYPT"],
  ISRAEL: ["TURKEY", "ARABIA", "EGYPT"],
  ARABIA: ["ISRAEL", "TURKEY"],
  ARAL: ["IRAN", "RUSIA", "MONGOLIA", "SIBERIA", "TARTARIA"],
  TARTARIA: ["ARAL", "TAIMIR", "SIBERIA"],
  TAIMIR: ["TARTARIA", "SIBERIA"],
  SIBERIA: ["ARAL", "MONGOLIA", "CHINA", "KAMCHATKA", "TAIMIR", "TARTARIA"],
  KAMCHATKA: ["SIBERIA", "CHINA", "JAPAN", "ALASKA"],
  JAPAN: ["KAMCHTAKA", "CHINA"],
  MONGOLIA: ["ARAL", "SIBERIA", "CHINA", "GOBI", "IRAN"],
  GOBI: ["MONGOLIA", "IRAN", "CHINA"],
};

class Country {
  static canAttack(source, target) {
    debugger;
    if (source.state.player.name === target.state.player.name) {
      return false;
    }

    return Country.areNeighbours(source.countryKey, target.countryKey);
  }

  static areNeighbours(source, target) {
    return Neighbours[source].includes(target);
  }
}

export default Country;

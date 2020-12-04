export const idRegExp = /\/([0-9]*)\/$/;

export const extractId = (item) => {
  return item.url.match(idRegExp)[1];
};

export const transformPlanet = (planet) => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    residents: planet.residents,
    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,
    surfaceWater: planet.surface_water,
    orbitalPeriod: planet.orbital_period,
  };
};

export const transformPerson = (person) => {
  return {
    id: extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    homeworld: person.homeworld,
    starships: person.starships,
    height: person.height,
    mass: person.mass,
    hairColor: person.hair_color,
    skinColor: person.skin_color,
  };
};

export const transformStarship = (starship) => {
  return {
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    starshipClass: starship.starship_class,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    maxSpeed: starship.max_atmosphering_speed,
    hyperdriveRating: starship.hyperdrive_rating,
    passengers: starship.passengers,
    pilots: starship.pilots,
  };
};

export const fakePeopleData = [
  {
    name: "Luke Skywalker",
    homeworld: "Tatooine",
    starships: ["X-wing", "Imperial shuttle"],
    id: 1,
  },
  {
    name: "R2-D2",
    homeworld: "Naboo",
    starships: [],
    id: 2,
  },
];

export const fakePerson = {
  name: "Luke Skywalker",
  homeworld: "Tatooine",
  starships: ["X-wing", "Imperial shuttle"],
  id: 1,
};

export const fakeStarships = [
  {
    name: "CR90 corvette",
    pilots: [],
    id: 1,
  },
  {
    name: "Sentinel-class landing craft",
    id: 2,
    pilots: [],
  },
  {
    name: "Millennium Falcon",
    id: 3,
    pilots: [
      {
        name: "Luke Skywalker",
        homeworld: "Tatooine",
        starships: ["X-wing", "Imperial shuttle"],
        id: 1,
      },
      {
        name: "R2-D2",
        homeworld: "Naboo",
        starships: [],
        id: 2,
      },
    ],
  },
];

export const fakePlanet = { name: "Dagobah", id: 4, residents: [] };

export const fakeStarship = {
  name: "Millennium Falcon",
  id: 23,
  pilots: [
    {
      name: "Luke Skywalker",
      homeworld: "Tatooine",
      starships: ["X-wing", "Imperial shuttle"],
      id: 1,
    },
    {
      name: "R2-D2",
      homeworld: "Naboo",
      starships: [],
      id: 2,
    },
  ],
};

export const fakePlanets = [
  { name: "Tatooine" },
  { name: "Dagobah" },
  { name: "Bespin" },
];

export const fakePayload = {
  starships: fakeStarships,
  planet: fakePlanet,
};

export const fakeId = 23;

export const fakeStarshipsDataOnServer = {
  starships: fakeStarships,
  next: false,
};

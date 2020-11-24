export const mockPeopleData = [
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

export const mockPerson = {
  name: "Luke Skywalker",
  homeworld: "Tatooine",
  starships: ["X-wing", "Imperial shuttle"],
  id: 1,
};

export const mockStarships = [
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

export const mockPlanet = { name: "Dagobah", id: 4, residents: [] };

const {
  getPlanetsDataRequest,
  getPlanetsDataRequestSuccess,
  getPlanetsDataRequestFailure,
  getPlanetDataRequest,
  getPlanetDataRequestSuccess,
  getPlanetDataRequestFailure,
} = require("../../store/actions/planets");
const {
  default: planetsReducer,
  initialState,
} = require("../../store/reducers/planetsReducer");

describe("test planets reducer", () => {
  it("should return initial state", () => {
    expect(planetsReducer(undefined, {})).toEqual(initialState);
  });

  it("get planets data request", () => {
    expect(planetsReducer(initialState, getPlanetsDataRequest)).toEqual({
      ...initialState,
      loading: true,
      error: false,
    });
  });

  it("get planets data request success", () => {
    const mockPlanets = [
      { name: "Tatooine" },
      { name: "Dagobah" },
      { name: "Bespin" },
    ];

    const newState = planetsReducer(
      initialState,
      getPlanetsDataRequestSuccess(mockPlanets)
    );

    expect(newState.loading).toBeFalsy();
    expect(newState.planets).toEqual(mockPlanets);
  });

  it("get planets data request error", () => {
    const newState = planetsReducer(initialState, getPlanetsDataRequestFailure);
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBe(true);
  });

  it("get planet details request", () => {
    const mockId = 5;
    const newState = planetsReducer(initialState, getPlanetDataRequest(mockId));
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
    expect(newState.id).toEqual(mockId);
  });

  it("get planet details request success", () => {
    const mockPlanet = { name: "Dagobah", id: 4, residents: [] };
    const mockResidents = [
      { name: "Luke Skywalker", id: 1 },
      { name: "C-3PO", id: 2 },
      { name: "R2-D2", id: 3 },
    ];

    /*  const mockPayload = {
      planet: mockPlanet,
      residents: mockResidents,
    };
 */
    const newState = planetsReducer(
      initialState,
      getPlanetDataRequestSuccess(mockPlanet)
    );

    expect(newState.planet).toEqual(mockPlanet);
    //expect(newState.residents).toEqual(mockResidents);
    expect(newState.loading).toBeFalsy();
  });

  it("get planet details request error", () => {
    const newState = planetsReducer(initialState, getPlanetDataRequestFailure);
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBe(true);
  });
});

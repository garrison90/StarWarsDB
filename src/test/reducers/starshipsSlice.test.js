import starshipsSlice, {
  clearStarships,
  getStarshipDetailsFailure,
  getStarshipDetailsRequest,
  getStarshipDetailsSuccess,
  initialState,
  setPageNumber,
  setQuery,
} from "../../store/reducers/starshipsSlice";
import {
  getStarshipsRequest,
  getStarshipsSuccess,
  getStarshipsFailure,
} from "../../store/reducers/starshipsSlice";

describe("test starships slice", () => {
  const mockStarships = [
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

  const mockStarship = {
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
  };

  const mockMoreStarshipsData = [
    {
      name: "X-wing",
      pilots: [],
      id: 4,
    },
    {
      name: "TIE Advanced x1",
      id: 5,
      pilots: [],
    },
    {
      name: "Executor",
      id: 6,
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

  const mockHasMoreProperty = true;
  const mockHasMoreAnotherProperty = null;
  const mockQuery = "h";
  const checkStarshipsDataOnServer = {
    starships: mockMoreStarshipsData,
    next: mockHasMoreAnotherProperty,
  };

  const mockStarshipsDataPayload = {
    starships: mockStarships,
    next: mockHasMoreProperty,
  };

  const mockId = 23;

  it("get starships data request", () => {
    const newState = starshipsSlice(initialState, getStarshipsRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get starships data request success", () => {
    const newState = starshipsSlice(
      initialState,
      getStarshipsSuccess(mockStarshipsDataPayload)
    );
    expect(newState.starships).toEqual(mockStarships);
    expect(newState.hasMore).toBe(mockHasMoreProperty);
    expect(newState.loading).toBeFalsy();
  });

  it("if there any more data on the server", () => {
    const state = starshipsSlice(
      initialState,
      getStarshipsSuccess(mockStarshipsDataPayload)
    );

    const newState = starshipsSlice(
      state,
      getStarshipsSuccess(checkStarshipsDataOnServer)
    );

    expect(newState.starships).toEqual([
      ...mockStarships,
      ...mockMoreStarshipsData,
    ]);
    expect(newState.hasMore).toBeFalsy();
    expect(newState.loading).toBeFalsy();
  });

  it("get starships data request failure", () => {
    const newState = starshipsSlice(initialState, getStarshipsFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });

  it("get starship details data request", () => {
    const newState = starshipsSlice(
      initialState,
      getStarshipDetailsRequest(mockId)
    );
    expect(newState.id).toBe(mockId);
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("get starship details data request success", () => {
    const newState = starshipsSlice(
      initialState,
      getStarshipDetailsSuccess(mockStarship)
    );

    expect(newState.loading).toBeFalsy();
    expect(newState.starship).toEqual(mockStarship);
  });

  it("get starship details request failure", () => {
    const newState = starshipsSlice(initialState, getStarshipDetailsFailure());
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });

  it("set new page number", () => {
    const newState = starshipsSlice(initialState, setPageNumber());
    expect(newState.pageNumber).toEqual(initialState.pageNumber + 1);
  });

  it("set value from input field", () => {
    const newState = starshipsSlice(initialState, setQuery(mockQuery));
    expect(newState.pageNumber).toBe(1);
    expect(newState.starships).toEqual([]);
    expect(newState.query).toEqual(mockQuery);
  });

  it("clear starships data", () => {
    expect(starshipsSlice(initialState, clearStarships())).toEqual(
      initialState
    );
  });
});

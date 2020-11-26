import peopleSlice, {
  getAllPeopleRequest,
  getAllPeopleRequestFailure,
  getAllPeopleRequestSuccess,
  getPersonDataRequest,
  getPersonDataRequestFailure,
  getPersonDataRequestSuccess,
  initialState,
} from "../../store/reducers/peopleSlice";

describe("test peopls slice", () => {
  const mockPeople = [
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

  const mockSelectedPerson = {
    name: "Luke Skywalker",
    homeworld: "Tatooine",
    starships: ["X-wing", "Imperial shuttle"],
    id: 1,
  };

  const mockPersonHomeworld = { name: "Dagobah", id: 4, residents: [] };
  const mockPersonStarships = [
    {
      name: "CR90 corvette",
      id: 1,
      pilots: [],
    },
    {
      name: "Y-wing",
      id: 2,
      pilots: [
        {
          name: "R2-D2",
          homeworld: "Naboo",
          starships: [],
          id: 2,
        },
      ],
    },
  ];

  const mockPayload = {
    starships: mockPersonStarships,
    planet: mockPersonHomeworld,
    person: mockSelectedPerson,
  };

  const mockId = 23;

  it("get all people data request", () => {
    const newState = peopleSlice(initialState, getAllPeopleRequest());
    expect(newState.error).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it("get all people data request success", () => {
    const newState = peopleSlice(
      initialState,
      getAllPeopleRequestSuccess(mockPeople)
    );

    expect(newState.loading).toBeFalsy();
    expect(newState.people).toEqual(mockPeople);
  });

  it("get all people data request failure", () => {
    const newState = peopleSlice(initialState, getAllPeopleRequestFailure());
    expect(newState).toBeTruthy();
    expect(newState.loading).toBeFalsy();
  });

  it("get person details data request", () => {
    const newState = peopleSlice(initialState, getPersonDataRequest(mockId));

    expect(newState.id).toEqual(mockId);
    expect(newState.loading).toBeTruthy();
    expect(newState.error).toBeFalsy();
  });

  it("get person details data request success", () => {
    const newState = peopleSlice(
      initialState,
      getPersonDataRequestSuccess(mockSelectedPerson)
    );
    expect(newState.selectedPerson).toEqual(mockSelectedPerson);
    /*  expect(newState.personHomeworld).toEqual(mockPersonHomeworld);
    expect(newState.personStarships).toEqual(mockPersonStarships); */
    expect(newState.loading).toBeFalsy();
  });

  it("get person details data request failure", () => {
    const newState = peopleSlice(initialState, getPersonDataRequestFailure());
    expect(newState.error).toBeTruthy();
    expect(newState.loading).toBeFalsy();
  });
});

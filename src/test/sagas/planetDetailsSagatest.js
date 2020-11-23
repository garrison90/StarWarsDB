import { call, put, select } from "redux-saga/effects";
import { planetDetailsSagaWorker } from "../../store/sagas/planetDetailsSaga";
import { selectPlanetId } from "../../store/selectors/planets";
import { getPlanet, getPlanetResidents } from "../../services/planets-service";
import { getPlanetDataRequestSuccess } from "../../store/actions/planets";

describe("planetDetails Saga", () => {
  it("if planet details request success", () => {
    const mockId = 5;
    const mockPlanetResidentsData = [
      {
        name: "Luke Skywalker",
        id: 5,
      },
    ];
    const mockPlanetResidents = ["Luc", "Another Luc"];
    const mockPlanet = {};

    const generator = planetDetailsSagaWorker();
    expect(generator.next().value).toEqual(select(selectPlanetId));
    expect(generator.next(mockId).value).toEqual(call(getPlanet, mockId));
    expect(generator.next().value).toEqual(
      call(getPlanetResidents, mockPlanetResidents)
    );
    expect(generator.next(mockPlanetResidents).value).toEqual(
      put(getPlanetDataRequestSuccess({ mockPlanet, mockPlanetResidentsData }))
    );
  });
});

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SearchForm } from "../SearchForm";
import rootReducer from "../../../store/reducers/rootReducer";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("search form test", () => {
  it("should assept data from store", () => {
    const { getByRole } = renderWithRedux(<SearchForm />, {
      initialState: {
        items: {
          query: "des",
        },
      },
    });
    expect(getByRole("textbox")).toHaveValue("des");
  });

  it("should change input value", () => {
    const { getByRole } = renderWithRedux(<SearchForm />);
    userEvent.type(getByRole("textbox"), "wing");
    expect(getByRole("textbox")).toHaveValue("wing");
  });
});

import { SearchForm } from "../SearchForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../../helpers/renderWithRedux";

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

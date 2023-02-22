import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { UnicornFarm } from "./UnicornFarm";

describe("Given the UnicornFarm component", () => {
  describe("When it is rendered", () => {
    test("Thet it should show a heading with the text:'Unicorn farm'", () => {
      const expectedTest = "Unicorn farm";

      render(
        <Provider store={store}>
          <UnicornFarm />
        </Provider>
      );
      const title = screen.getByRole("heading", { name: expectedTest });
      expect(title).toBeInTheDocument();
    });
  });
});

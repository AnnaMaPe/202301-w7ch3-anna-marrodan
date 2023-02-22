import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { UnicornCounter } from "./UnicornCounter";

describe("Given a Counter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a buttons a text '+'", () => {
      const expectedText = "+";

      render(
        <Provider store={store}>
          <UnicornCounter />
        </Provider>
      );
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
    test("Then it should show a buttons a text '-'", () => {
      const expectedText = "-";

      render(
        <Provider store={store}>
          <UnicornCounter />
        </Provider>
      );
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});

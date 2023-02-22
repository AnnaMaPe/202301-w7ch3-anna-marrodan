import { UnicornCountState } from "../../types";
import {
  addUnicornActionCreator,
  removeUnicornActionCreator,
  unicornReducer,
} from "./unicornSlice";

describe("Given a unicornReducer function", () => {
  describe("When it receives an intial state of 3 unicorns and add one unicorn function", () => {
    test("Then it should return a current state of 4 unicorns", () => {
      const initialStateCount: UnicornCountState = { count: 3 };

      const finalStateCount = unicornReducer(
        initialStateCount,
        addUnicornActionCreator
      );

      expect(finalStateCount.count).toBe(4);
    });
  });
  describe("When it receives an intial state of 3 unicorns and remove one unicorn function", () => {
    test("Then it should return a current state of 2 unicorns", () => {
      const initialStateCount: UnicornCountState = { count: 3 };

      const finalStateCount = unicornReducer(
        initialStateCount,
        removeUnicornActionCreator
      );

      expect(finalStateCount.count).toBe(2);
    });
  });
});

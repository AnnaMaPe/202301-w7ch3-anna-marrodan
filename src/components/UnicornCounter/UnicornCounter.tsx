import {
  addUnicornActionCreator,
  removeUnicornActionCreator,
} from "../../store/features/unicornSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button } from "../Button/Button";
import { UnicornCounterStyled } from "./UnicornCounterStyled";

export const UnicornCounter = (): JSX.Element => {
  const totalUnicors = useAppSelector((state) => state.unicorn);

  const dispatch = useAppDispatch();

  const addUnicorn = () => {
    dispatch(addUnicornActionCreator());
  };

  const removeUnicorn = () => {
    dispatch(removeUnicornActionCreator());
  };

  return (
    <UnicornCounterStyled className="counter">
      <Button onClick={addUnicorn} label="+"></Button>
      <h2 className="counter__title">
        You have a total of {totalUnicors.count} unicorns!
      </h2>
      <Button onClick={removeUnicorn} label="-"></Button>
    </UnicornCounterStyled>
  );
};

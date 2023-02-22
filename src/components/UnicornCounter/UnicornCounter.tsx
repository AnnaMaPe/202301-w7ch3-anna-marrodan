import { useAppSelector } from "../../store/hooks";
import { UnicornCounterStyled } from "./UnicornCounterStyled";

export const UnicornCounter = (): JSX.Element => {
  const totalUnicors = useAppSelector((state) => state.unicorn);

  return (
    <UnicornCounterStyled className="counter">
      <button className="counter__button" />
      <h2 className="counter__title">
        You have a total of {totalUnicors.count} unicorns!
      </h2>
      <button className="counter__button" />
    </UnicornCounterStyled>
  );
};

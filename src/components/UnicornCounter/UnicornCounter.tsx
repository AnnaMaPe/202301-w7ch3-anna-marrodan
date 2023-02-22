import { useAppSelector } from "../../store/hooks";

export const UnicornCounter = (): JSX.Element => {
  const totalUnicors = useAppSelector((state) => state.unicorn);

  return (
    <div className="counter">
      <h2 className="counter__title">
        You have a total of {totalUnicors.count} unicorns!
      </h2>
    </div>
  );
};

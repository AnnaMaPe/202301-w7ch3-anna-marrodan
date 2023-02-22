import { useAppSelector } from "../../store/hooks";
import { UnicornFarmStyled } from "./UnicornFarmStyled";

export const UnicornFarm = (): JSX.Element => {
  const unicornCount = useAppSelector((state) => state.unicorn.count);
  const unicornEmojis = Array.from({ length: unicornCount }, (_, i) => (
    <span key={i} role="img" aria-label="unicorn">
      🦄
    </span>
  ));

  return (
    <>
      <UnicornFarmStyled className="gallery">
        <h2 className="gallery__title">Unicorn farm</h2>
        <div className="gallery__emojis">{unicornEmojis}</div>
      </UnicornFarmStyled>
    </>
  );
};

import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

export const UnicornGallery = (): JSX.Element => {
  const unicornCount = useAppSelector((state) => state.unicorn.count);
  const unicornEmojis = Array.from({ length: unicornCount }, (_, i) => (
    <span key={i} role="img" aria-label="unicorn">
      🦄
    </span>
  ));

  useEffect(() => {}, [unicornCount]);
  return (
    <>
      <h2>Unicorn farm</h2>
      <div className="gallery_emojis">{unicornEmojis}</div>
    </>
  );
};

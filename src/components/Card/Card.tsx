import clsx from "clsx";
import { FC } from "react";

type TProps = {
  card: {
    id: number;
    src: string;
    matched: boolean;
  };
  handleBackClick: (card: { id: number; src: string }) => void;
  flipped: boolean;
};

const Card: FC<TProps> = ({ card, handleBackClick, flipped }) => {
  return (
    <div className="cursor-pointer rounded-md border-2 border-white relative ">
      <div className={flipped ? "" : ""}>
        <img
          src={card.src}
          alt="front-image"
          className={clsx(
            "rounded-md front",
            flipped && "flipped-front",
          )}
        />

        <img
          src={"/img/cover.png"}
          alt="cover-image"
          onClick={() => handleBackClick(card)}
          className={clsx(
            "rounded-md back w-full rotate",
            flipped && "flipped-back",
          )}
        />
      </div>
    </div>
  );
};

export default Card;

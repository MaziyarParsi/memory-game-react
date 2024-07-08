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
    <div className="cursor-pointer rounded-md border-2 border-white relative transition-all">
      <div className={flipped ? "" : ""}>
        {flipped && (
          <img
            src={card.src}
            alt="front-image"
            className=" rounded-md transition delay-150 w-full"
          />
        )}
        {!flipped && (
          <img
            src={"/img/cover.png"}
            alt="cover-image"
            onClick={() => handleBackClick(card)}
            className=" rounded-md transition delay-150 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default Card;

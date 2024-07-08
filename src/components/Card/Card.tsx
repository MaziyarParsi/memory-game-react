import { FC } from "react";

type TProps = {
  card: {
    id: number;
    src: string;
    matched: boolean;
  };
  handleBackClick: (card: { id: number; src: string }) => void;
  flipped:boolean
};

const Card: FC<TProps> = ({ card, handleBackClick,flipped }) => {
  return (
    <div className="cursor-pointer">
      {flipped && <img src={card.src} alt="front-image" />}
      {!flipped && (
        <img
          src={"/img/cover.png"}
          alt="cover-image"
          onClick={() => handleBackClick(card)}
        />
      )}
    </div>
  );
};

export default Card;

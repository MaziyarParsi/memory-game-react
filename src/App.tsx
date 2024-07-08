import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card } from "./components";

const cardImages = [
  { src: "/img/helmet-1.png",matched:false },
  { src: "/img/potion-1.png" ,matched:false},
  { src: "/img/ring-1.png" ,matched:false},
  { src: "/img/scroll-1.png" ,matched:false},
  { src: "/img/shield-1.png",matched:false },
  { src: "/img/sword-1.png",matched:false },
];

type TCard = {
  id: number;
  src: string;
  matched:boolean
};

function App() {
  const repeatCardInGame = 2;

  const [finalCards, setFinalCards] = useState<TCard[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoinceOne] = useState<TCard | null>(null);
  const [choiceTwo, setChoinceTwo] = useState<TCard | null>(null);
  const[disabled,setDisabled]=useState(false)

  // create cards based on duplicate value we want
  function createCardsList() {
    let newUnorderedCards = cardImages;
    for (let index = 1; index < repeatCardInGame; index++) {
      newUnorderedCards = [...newUnorderedCards, ...cardImages];
    }
    return newUnorderedCards;
  }

  // we shuffle the cards list
  function shuffleCards(list: { src: string }[]) {
    let currentIndex = list.length;
    const shuffledList = [];
    const usedIndexes: number[] = [];
    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * list.length);
      if (!usedIndexes.includes(randomIndex)) {
        usedIndexes.push(randomIndex);
        shuffledList.push({ ...list[randomIndex], id: randomIndex + 1 });
        currentIndex--;
      }
    }

    // this is easier way to do this
    // shuffledList=list.sort(()=>Math.random() - 0.5).map((card,index)=>({...card,id:index}))

    return shuffledList;
  }

  function handleClick() {
    const unOrderedCards = createCardsList();
    const finalList = shuffleCards(unOrderedCards);
    // @ts-expect-error chec type
    setFinalCards(finalList);
    setTurns(0);
  }

  function handleBackClick(card: TCard) {
    if(!disabled){
      !choiceOne ? setChoinceOne(card) : setChoinceTwo(card);
    }
  }


  function resetTurn() {
    setChoinceOne(null);
    setChoinceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false)
  }

  useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        console.log("mathcer",finalCards);
        setFinalCards((prev)=>prev.map((card)=>{
          if(card.src===choiceOne.src){
            return {...card,matched:true}
          }else{
            return card
          }
        }))
      } else {
        console.log("not matched");
      }
      setTimeout(()=>resetTurn(),1000)
     
    }
  }, [choiceOne, choiceTwo]);

  

  return (
    <div className="bg-primary text-white min-h-screen h-fit w-full flex flex-col justify-center items-center py-8">
      <div>
        <h1 className="font-bold text-xl"> simple memory card</h1>
        <Button onClick={handleClick}>Start game</Button>
      </div>

      <div className="grid mt-4 grid-cols-6 gap-4">
        {finalCards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleBackClick={() => handleBackClick(card)}
            flipped={card.id===choiceOne?.id|| card.id===choiceTwo?.id || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

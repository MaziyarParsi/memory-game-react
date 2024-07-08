import { useState } from "react";
import "./App.css";
import { Button, Card } from "./components";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const repeatCardInGame = 2;

  const [finalCards, setFinalCards] = useState<{ id: number; src: string }[]>(
    []
  );
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
    setFinalCards(finalList);
  }

  function handleCardClick (id:number){
    console.log("card",id)
  }
  

  return (
    <div className="bg-primary text-white min-h-screen h-fit w-full flex flex-col justify-center items-center py-8">
      <div>
        <h1 className="font-bold text-xl"> simple memory card</h1>
        <Button onClick={handleClick}>Start game</Button>
      </div>

      <div className="grid mt-4 grid-cols-6 gap-9">
        {finalCards.map((card) => (
         <Card key={card.id} id={card.id} src={card.src} handleClick={()=>handleCardClick(card.id)}/>
        ))}
      </div>
    </div>
  );
}

export default App;

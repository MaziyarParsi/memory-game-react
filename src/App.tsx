import "./App.css";
import { Button } from "./components";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-primary text-white h-screen w-screen flex justify-center py-8">
      <div>
        <h1 className="font-bold text-xl"> simple memory card</h1>
        <Button>click me</Button>
      </div>
    </div>
  );
}

export default App;

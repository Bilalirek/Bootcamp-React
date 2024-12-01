import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./components/Board";

function App() {
  const cards = [
    { title: "card 1", items: ["item 1.1", "item 1.2"] },
    { title: "card 2", items: ["item 2.1", "item 2.2"] },
    { title: "card 3", items: ["item 3.1", "item 3.2"] },
  ];


  return (
    <>
      <Board cards={cards} />
    </>
  )
}

export default App;

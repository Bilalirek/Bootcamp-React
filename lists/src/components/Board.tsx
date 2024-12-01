import { useState } from "react";

interface BoardProps {
    cards: { title: string; items: string[] }[];
}

function Board({ cards }: BoardProps) {
    const [boardCards, setBoardCards] = useState(cards);
    const [newCardTitle, setNewCardTitle] = useState("");
    const [newItems, setNewItems] = useState<string[]>(Array(cards.length).fill(""));



    function removeCard(selectedIndex: number) {
        // const newBoardCards = [];

        // for (let i = 0; i < boardCards.length; i++) {
        // if (i !== selectedIndex) {
        // newBoardCards.push(boardCards[i]);
        // }
        // }

        const newBoardCards = boardCards.filter(function (_, index) {
            return index !== selectedIndex;
        });

        setBoardCards(newBoardCards);
    }

    function removeItem(cardIndex: number, itemIndex: number) {
        const newItems = [];

        for (let i = 0; i < boardCards[cardIndex].items.length; i++) {
            if (i !== itemIndex) {
                newItems.push(boardCards[cardIndex].items[i]);
            }
        }

        const newCards = [];

        for (let i = 0; i < boardCards.length; i++) {
            if (i === cardIndex) {
                newCards.push({
                    title: boardCards[cardIndex].title,
                    items: newItems,
                });
            } else {
                newCards.push(boardCards[i]);
            }
        }

        setBoardCards(newCards);
    }


    function addCard() {


        setBoardCards([...boardCards, { title: newCardTitle, items: [], }]);
        setNewCardTitle("");
    }
    function addItem(cardIndex: number) {
        const updatedCards = boardCards.map((card, index) => {
            if (index === cardIndex) {
                return { ...card, items: [...card.items, newItems[cardIndex]] }; // Use the correct item
            }
            return card;
        });
        setBoardCards(updatedCards);
        setNewItems(prev => {
            const newArr = [...prev];
            newArr[cardIndex] = ""; // Clear the input for the specific card
            return newArr;
        });
    }

    return (
        <>
            <div className="container text-center py-4">
                <div className="input-group mb-4">
                    <input
                        className="form-control"
                        placeholder="Enter Card Name"
                        onChange={(e) => setNewCardTitle(e.target.value)}
                        value={newCardTitle}
                    />
                    <button
                        onClick={addCard}

                        className="btn btn-primary">Add Card</button>
                </div>
                <div className="row g-4">
                    {boardCards.map((card, cardIndex) => (
                        <>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <span>{card.title}</span>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() =>
                                                removeCard(cardIndex)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            {card.items.map(
                                                (item, itemIndex) => (
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <span>{item}</span>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() =>
                                                                removeItem(
                                                                    cardIndex,
                                                                    itemIndex
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="input-group mt-4">
                                            <input
                                                className="form-control"
                                                placeholder="Enter Item Name"
                                                value={newItems[cardIndex]} // Use the specific input state for the card
                                                onChange={(e) => {
                                                    const updatedNewItems = [...newItems];
                                                    updatedNewItems[cardIndex] = e.target.value; // Update the specific index
                                                    setNewItems(updatedNewItems);
                                                }}
                                            />
                                            <button className="btn btn-success"
                                                onClick={() => addItem(cardIndex)}>
                                                Add Item
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Board;
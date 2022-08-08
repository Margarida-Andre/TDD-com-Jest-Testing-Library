import React, { useState } from "react";

type ListProps = {
  initialItems: string[];
};

const List: React.FC<ListProps> = ({ initialItems }) => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      // eslint-disable-next-line no-self-compare
      setList((state) => state.filter((item) => item !== item));
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}> Remover </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;

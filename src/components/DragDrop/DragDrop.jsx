import React from 'react';

const DragDrop = () => {
    const [name, setName] = useState(["HTML", "CSS", "Javascript", "Python"]);

  const itemDrag = useRef();
  const itemDragOver = useRef();

  const handleSort = () => {
    let items = [...name];
    let dragItems = items.splice(itemDrag.current, 1)[0];

    items.splice(itemDragOver.current, 0, dragItems);

    itemDrag.current = null;
    itemDragOver.current = null;

    setName(items);
  };

  return (
    <div className="App">
      <h1>Drag and Drop</h1>
      <div className="main">
        {name?.map((item, index) => {
          return (
            <div
              className="itemName"
              key={index}
              draggable
              onDragStart={(e) => (itemDrag.current = index)}
              onDragEnter={(e) => (itemDragOver.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DragDrop;
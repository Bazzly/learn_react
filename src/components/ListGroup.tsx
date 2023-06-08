import { useState } from "react";

// {items: [], heading:string}
interface Props{
    items: string[];
    heading: string;
    // {item:string} =void}
    onSelectItem: (item: string)=>void
}
function ListGroup({items , heading,onSelectItem}: Props) {
//   hook 
  const [selectedIndex , setSelectedIndex] = useState(-1);
//variable (selectedIndex)
 // updater function
  // items = [];
  // const message = items.length === 0 ? <p>No item found</p> : null;
  // const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  // }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
            key={item}
            onClick={()=> {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

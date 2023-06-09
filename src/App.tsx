import ListGroup from "./components/ListGroup";
import Message from "./message";
function App() {
  let items = ["Lagos", "Ogun", "OYo", "Sokoto", "Ekiti"];
  const handleSelectedItem = (items: string)=>{
    console.log(items);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}/>
    </div>

  );
}

export default App;

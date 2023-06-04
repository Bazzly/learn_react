import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Lagos", "Ogun", "OYo", "Sokoto", "Ekiti"];
  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;

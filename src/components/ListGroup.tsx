function ListGroup() {
  let items = ["Lagos", "Ogun", "OYo", "Sokoto", "Ekiti"];
    items = [];
    if (items.length === 0)
        return <><h1>Header</h1> <p>No item found</p></> 
  return (
    <>
      <h1>Header</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

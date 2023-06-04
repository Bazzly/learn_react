function Message() {
    // JSX : JavaScript XML
    const name = 'Bazzlycodes';
    if (name)
        return <h1>Hello react {name} is here</h1>;
    else
         return <h1>Hello react i am here</h1>;
        
}

export default Message;
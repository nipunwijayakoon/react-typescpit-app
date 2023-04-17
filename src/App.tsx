import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListGroupAfterRemoveHanldeClick from "./components/ListGroupAfterRemoveHandleClick";

function App() {
  //this is only for second component
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      {/* <Alert>Hello World</Alert> for pass the string content use this one for pass the html content use bellow one*/}

      <Alert onClose={() => setAlertVisibility(false)}>
        Hello <span>World</span>
      </Alert>
      <ListGroup />
      <ListGroupAfterRemoveHanldeClick
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* s tatic value ekk pass karna nis cities ekata {} one nee */}
    </div>
  );
}

export default App;

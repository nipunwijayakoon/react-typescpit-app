import { useState } from "react";
import Message from "../Message";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: String) => void;
}

// function ListGroup(props: Props) {
// mehma gtttoth prop. kya kya add krnw]n wenwa phla item WritableStreamDefaultWriter, heading walatai

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];
  // let selectedIndex =0; this is locl for function components, sp we use state hook

  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] //variable (seleectIndex)
  //   arr[1] //updater function
  //   if we add same other component to app that keep separete state

  // we can use constant also for bellow one if you dent we to pass any parameter
  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      {/* fragment */}
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {/* in jsx we dont we for loop then. In jsx we can use only html element and other react elements*/}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // // onClick={() => console.log(item, index)}
            // // onClick={(e) => console.log(e)}
            // onClick={(event) => console.log(event)}
            // // in here we can seee sytheticBaseEvent, it is wrapper class of diffrentimplementaion of event objectof different browser
            // // type of the event is automatcally get
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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

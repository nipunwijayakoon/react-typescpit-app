import Message from "../Message";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
  //   items = [];
  let selectedIndex = 0;

  // we can use constant also for bellow one if you dent we to pass any parameter
  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  const handleClick = (event: MouseEvent) => console.log(event);
  // in here compiler say event has no any type. but remember inline this has no error. We have to import mouseevent

  return (
    <>
      {/* fragment */}
      <h1>List</h1>
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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import React from "react";

function ListItems(props) {
  let flag = false;
  const deleteEvent = (item, index) => {
    props.takeItem(index);
    flag = !flag;
  };
  const onListItemClick = (item, index) => {
    if (flag) {
      flag = !flag;
    } else {
      props.takeItemObject(item, index);
    }
  };

  return (
    <li
      className={props.color}
      onClick={() => onListItemClick(props.item, props.index)}
    >
      <div className="row">
        <div className="col-8">
          <h2 className="h2-text">{props.item.name}</h2>
          <p>{props.item.description}</p>
        </div>
        <div className="col-4">
          <button
            type="submit"
            className="float-right close"
            onClick={() => deleteEvent(props.item, props.index)}
          >
            X
          </button>

          <h3 className="mt-0">{props.item.dayLeft}</h3>
          <p className="text-center">days {props.item.status}</p>
        </div>
      </div>
    </li>
  );
}

function EventItems(props) {
  return (
    <div>
      <ul className="theList">
        {props.items.map((item, index) => {
          return (
            <ListItems
              item={item}
              color={
                item.priority === "High"
                  ? "red"
                  : item.priority === "Medium"
                  ? "yellow"
                  : "green"
              }
              index={index}
              key={index}
              takeItem={props.takeItem}
              takeItemObject={props.takeItemObject}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default EventItems;

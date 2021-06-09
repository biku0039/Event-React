import React, { useEffect, useState } from "react";

function EditEvent(props) {
  const [name, setName] = useState(props.item.name);
  const [description, setDescription] = useState(props.item.description);
  const [date, setDate] = useState(props.item.date);
  const [priority, setPriority] = useState(props.item.priority);

  const closed = (e) => {
    props.closed("true");
    e.preventDefault();
  };
  let handleName = (event) => {
    setName(event.target.value);
  };
  let handleDescription = (event) => {
    setDescription(event.target.value);
  };
  let handleDate = (event) => {
    setDate(event.target.value);
  };
  let handlePriority = (event) => {
    setPriority(event.target.value);
  };
  let editItem = (item) => {
    const fixedDate = new Date("2021-06-14");
    const originalDate = new Date(date);
    let dayLeft = fixedDate.getDate() - originalDate.getDate();
    let status = "";
    if (dayLeft >= 0) {
      status = "left";
    } else {
      dayLeft = Math.abs(dayLeft);
      status = "ago";
    }
    props.editedItem({
      name: name,
      description: description,
      date: date,
      priority: priority,
      status: status,
      dayLeft: dayLeft,
      index: props.index,
      key: Date.now(),
    });
    item.preventDefault();
  };
  useEffect(() => {
    setName(props.item.name);
    setDescription(props.item.description);
    setDate(props.item.date);
    setPriority(props.item.priority);
  }, [props]);
  return (
    <div className="eventForm">
      <form onSubmit={editItem}>
        <button type="submit" className="float-right close" onClick={closed}>
          X
        </button>
        <h2>Edit Event</h2>
        <label>Name</label>
        <input type="text" value={name} onChange={handleName} />
        <label>Description</label>
        <input type="text" value={description} onChange={handleDescription} />
        <label>Date</label>
        <input type="date" value={date} onChange={handleDate} />
        <label>Priority</label>
        <select value={priority} onChange={handlePriority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="f-right">
          Edit Event
        </button>
      </form>
    </div>
  );
}
export default EditEvent;

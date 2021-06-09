import React, { Component } from "react";
import "./Events.css";

class AddEvents extends Component {
  today_date = new Date().toISOString().slice(0, 10);
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      date: this.today_date,
      priority: "High",
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    const { name, description, date, priority } = this.state;

    if ((name && description && date && priority) !== "") {
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
      var newItem = {
        name: name,
        description: description,
        date: date,
        priority: priority,
        status: status,
        dayLeft: dayLeft,
        key: Date.now(),
      };

      this.props.sendData(newItem);
      this.props.clicked("true");
      this.setState({
        name: "",
        description: "",
        date: this.today_date,
        priority: "High",
      });
    }

    e.preventDefault();
  }
  closed = (e) => {
    this.props.closed("true");
    e.preventDefault();
  };
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  handlePriority = (event) => {
    this.setState({
      priority: event.target.value,
    });
  };

  render() {
    const { name, description, date, priority } = this.state;
    return (
      <div className="eventForm">
        <form onSubmit={this.addItem}>
          <button
            type="submit"
            className="float-right close"
            onClick={this.closed}
          >
            X
          </button>
          <h2>Add Event</h2>
          <label>Name</label>
          <input type="text" value={name} onChange={this.handleName} />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={this.handleDescription}
          />
          <label>Date</label>
          <input type="date" value={date} onChange={this.handleDate} />
          <label>Priority</label>
          <select value={priority} onChange={this.handlePriority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button type="submit" className="f-right">
            Add Event
          </button>
        </form>
      </div>
    );
  }
}

export default AddEvents;

import { Component } from "react";
import "./App.css";
import EditEvent from "./Container/EditEvent";
import EventItems from "./Container/EventItems";
import AddEvents from "./Container/AddEvents";

class App extends Component {
  state = { show: true, isClicked: false, eveItems: [] };
  item = {};
  page = (
    <div className="center">
      <h2>Click the add event button</h2>
    </div>
  );

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }
  showAddEvents = () => {
    this.setState({ show: true });

    if (this.state.show) {
      this.page = (
        <AddEvents
          clicked={this.clicked}
          sendData={this.getData}
          closed={this.closed}
          evalue={this.item}
        />
      );
    }
  };
  getData(val) {
    this.setState((state) => ({
      eveItems: [...state.eveItems, val],
    }));
  }
  fetchData = (eventIndex) => {
    let items = this.state.eveItems;
    items.splice(eventIndex, 1);
    this.setState(() => ({
      eveItems: [...items],
    }));
  };
  itemData = (eventItem, index) => {
    // console.log(index);
    this.item = eventItem;

    if (this.item) {
      this.setState({ show: false });
      this.page = (
        <EditEvent
          index={index}
          item={eventItem}
          closed={this.closed}
          editedItem={this.editedItem}
        />
      );
    }
  };
  editedItem = (item) => {
    let allData = [...this.state.eveItems];
    allData[item.index] = item;
    this.setState(() => ({
      eveItems: [...allData],
    }));
  };
  clicked = (val) => {
    if (val === "true") {
      this.setState({ isClicked: true });
    }
  };
  closed = (val) => {
    if (val === "true") {
      this.setState({ show: true });
      this.page = (
        <div className="center">
          <h2>Click the add event button</h2>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <button type="submit" onClick={() => this.showAddEvents()}>
                Add Event
              </button>
              <br />
              {this.state.isClicked ? (
                <EventItems
                  items={this.state.eveItems}
                  takeItem={this.fetchData}
                  takeItemObject={this.itemData}
                />
              ) : (
                <h3 className="s-center">No data</h3>
              )}
            </div>
          </div>
          <div className="col">
            <div className="card">{this.page}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

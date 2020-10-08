import React from "react";
import { getFunName, slugify } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   // If you want to use goToStore(event) function syntax - not recommended
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(e) {
    e.preventDefault();
    // First grab the text from the box
    const storeId = slugify(this.storeInput.value);
    // Second we're going to transition from / to /store/:storeId
    this.props.history.push(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={(input) => (this.storeInput = input)}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default StorePicker;

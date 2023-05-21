// ShowButton.js
import React from "react";

export default class ShowButton extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button onClick={onClick} className="show_btn">
        {text}
      </button>
    );
  }
}

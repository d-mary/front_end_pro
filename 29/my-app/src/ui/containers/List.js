// List.js
import React from "react";
import Button from "../components/Button";
import ShowButton from "../components/ShowButton";

export default class List extends React.Component {
  render() {
    const { smileys, handleSmileyClick, handleShowResults } = this.props;
    return (
      <div>
        <ol>
          {smileys.map((smiley) => (
            <li key={smiley.id}>
              {smiley.name} - {smiley.count} clicks
              <Button
                text="Vote"
                onClick={() => handleSmileyClick(smiley.id)}
              />
            </li>
          ))}
        </ol>
        <ShowButton
          text="Show Results"
          onClick={() => handleShowResults()}
        ></ShowButton>
      </div>
    );
  }
}

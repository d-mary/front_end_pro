// App.js
import React from "react";
import List from "./ui/containers/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smileys: [
        { id: Math.random(), name: "Smiley 1", count: 0 },
        { id: Math.random(), name: "Smiley 2", count: 0 },
        { id: Math.random(), name: "Smiley 3", count: 0 },
      ],
    };
  }

  handleSmileyClick = (id) => {
    const { smileys } = this.state;
    const updatedSmileys = smileys.map((smiley) => {
      if (smiley.id === id) {
        return {
          ...smiley,
          count: smiley.count + 1,
        };
      } else {
        return smiley;
      }
    });
    this.setState({ smileys: updatedSmileys });
  };

  handleShowResults = () => {
    const { smileys } = this.state;
    const maxCount = Math.max(...smileys.map((smiley) => smiley.count));
    const winningSmileys = smileys.filter(
      (smiley) => smiley.count === maxCount
    );

    if (winningSmileys.length === 1) {
      const winningSmiley = winningSmileys[0];
      alert(`Winning smiley is: ${winningSmiley.name}`);
    } else {
      const smileyNames = winningSmileys
        .map((smiley) => smiley.name)
        .join(", ");
      alert(`Smileys with the same count are: ${smileyNames}`);
    }
  };

  render() {
    return (
      <List
        smileys={this.state.smileys}
        handleSmileyClick={this.handleSmileyClick}
        handleShowResults={this.handleShowResults}
      />
    );
  }
}

export default App;

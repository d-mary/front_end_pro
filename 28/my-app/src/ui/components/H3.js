import React from "react";

export class H3 extends React.Component {
  render()  {
  const { text } = this.props
  
    return <h3>{text}</h3>;
  }
}

import React from "react";
import { H1 } from "../components/H1";
import { Navigation } from "../containers/Navigation";
export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <H1></H1>
        <Navigation></Navigation>
      </header>
    );
  }
}

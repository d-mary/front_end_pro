import React from "react";
import Link from "../components/Link";

export class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li>
            <Link to="#">Main</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contacts</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

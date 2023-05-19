import React from "react";
import { Li } from "../components/Li_item";

export class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <Li text="Header"></Li>
          <Li text="First section" customClass="second_item"></Li>
          <Li text="Second section" customClass="third_item"></Li>
          <Li text="Footer" customClass="forth_item"></Li>
        </ul>
      </nav>
    );
  }
}

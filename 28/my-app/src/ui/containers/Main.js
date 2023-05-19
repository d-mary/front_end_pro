import React from "react";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
export class Main extends React.Component {
  render() {
    return (
      <main>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
      </main>
    );
  }
}

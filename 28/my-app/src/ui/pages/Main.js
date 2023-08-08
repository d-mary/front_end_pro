import React from "react";
import { FirstSection } from "../containers/FirstSection";
import { SecondSection } from "../containers/SecondSection";
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

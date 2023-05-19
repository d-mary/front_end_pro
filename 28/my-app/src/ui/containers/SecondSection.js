import React from "react";
import { Paragraph } from "../components/Paragraph";
import { H3 } from "../components/H3";

export class SecondSection extends React.Component {
  render() {
    return (
      <section>
        <H3 text="Why do we use it?"></H3>
        <Paragraph
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          customClass="contant"
        ></Paragraph>
      </section>
    );
  }
}

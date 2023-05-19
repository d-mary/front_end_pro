import React from "react";
import { Paragraph } from "../components/Paragraph";
import { H3 } from "../components/H3";
import { SocialLinks } from "../containers/SocialLinks";
export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <H3 text="Footer"></H3>
        <Paragraph text="If you want contact us, here are our links in social media:"></Paragraph>
        <SocialLinks></SocialLinks>
      </footer>
    );
  }
}

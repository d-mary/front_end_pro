import React from "react";
import Link from "../components/Link";

export class SocialLinks extends React.Component {
  render() {
    return (
      <ul className="media">
        <Link customClass="media"></Link>
        <Link customClass="media"></Link>
        <Link customClass="media"></Link>
      </ul>
    );
  }
}

import React from "react";
import cx from "classnames";

export class Paragraph extends React.Component {
  render() {
    const { text, customClass } = this.props;
    const className = cx("contant", {
      [customClass]: customClass,
    });
    return <p className={className}>{text}</p>;
  }
}

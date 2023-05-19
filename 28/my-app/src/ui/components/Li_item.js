import React from "react";
import cx from "classnames";

export class Li extends React.Component {
  render() {
    const { text, customClass } = this.props;
    const className = cx("first_item", {
      [customClass] : customClass
    });
    return <a href="#"><li className={className}>{text}
    </li></a>;
  }
}

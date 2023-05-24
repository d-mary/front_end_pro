import React from "react";
import cx from "classnames";

const Button = ({ text, customClass, onClick }) => {
  const className = cx("form__btn", {
    [customClass]: customClass,
  });

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

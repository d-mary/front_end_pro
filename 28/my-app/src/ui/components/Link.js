import React from "react";
// import cx from "classnames";

function Link(props) {
  const { to, children } = props;
  return <a href={to}>{children}</a>;
}

export default Link;
// export class Li extends React.Component {
//   render() {
//     const { text, customClass } = this.props;
//     const className = cx("first_item", {
//       [customClass]: customClass,
//     });
//     return (
//       <a href="#">
//         <li className={className}>{text}</li>
//       </a>
//     );
//   }
// }

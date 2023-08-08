import cx from "classnames";

// function Button({ text, customClass, onClick }) {
//   const customClass = cx("form_btn", { [customClass]: customClass });

//   return (
//     <button className={className} onClick={onClick}>
//       {text}
//     </button>
//   );
// }

function Button({ text, customClass, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
export default Button;

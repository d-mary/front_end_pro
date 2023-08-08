import Link from "../components/Link";
function Nav() {
  return (
    <ul>
      <li>
        <Link to="#">Main</Link>
      </li>
      <li>
        <Link to="#">About</Link>
      </li>
      <li>
        <Link to="#">Contacts</Link>
      </li>
    </ul>
  );
}

export default Nav;

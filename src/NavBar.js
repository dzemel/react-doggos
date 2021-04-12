import { NavLink } from "react-router-dom";

function NavBar(props) {
  const { names } = props;
  return (
    <div className="NavBar">
      {names.map((dog) => (
        <NavLink exact to={`/dogs/${dog}`}>
          {dog}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBar;

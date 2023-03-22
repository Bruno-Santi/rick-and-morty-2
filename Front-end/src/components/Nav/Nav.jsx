import { Link } from "react-router-dom";
import style from "../Nav/Nav.module.css";
import SearchBar from "../SeachBar/SearchBar";

const Nav = () => {
  return (
    <div>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <Link to="/home">
            {" "}
            <li className={style.li}>HOME</li>
          </Link>
          <Link to='/favorites' style ={{textDecoration: 'none'}}className={style.li}>
            FAVORITES
          </Link>
          <Link to="/about">
            <li className={style.li}>ABOUT </li>
          </Link>
         
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li className={style.logout}>LOGOUT</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

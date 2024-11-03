import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/naoexiste"}>Don't exist</Link>
        </li>
        <li>
          <Link to={"/param/123"}>Param #01</Link>
        </li>
        <li>
          <Link to={"/param/ok"}>Param #02</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;

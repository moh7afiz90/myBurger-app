import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>SideDrawer</div>
      <Logo />
      <nav>
        <ul>
          <li>.....</li>
        </ul>
      </nav>
    </header>
  );
};

export default toolbar;

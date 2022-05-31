import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <h1>React Routing</h1>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="./">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="./welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="./products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="./about">
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="./contact">
              ContactUs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

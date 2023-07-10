import React from "react";
import listIcon from "../assets/images/icon-list.svg";

import classes from "./SignUpUpdateItem.module.css";

function SignUpUpdateItem({ item }) {
  return (
    <li className={classes.listItem}>
      <img src={listIcon} alt="tick" />
      <h2>{item}</h2>
    </li>
  );
}

export default SignUpUpdateItem;

import React from "react";
import listIcon from "../assets/images/icon-list.svg";

import classes from "./SignUpUpdateItem.module.css";

function SignUpUpdateItem({ item }) {
  return (
    <li className={classes.listItem}>
      <img src={listIcon} alt="tick" />
      <p>{item}</p>
    </li>
  );
}

export default SignUpUpdateItem;

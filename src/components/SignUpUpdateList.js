import React from "react";
import SignUpUpdateItem from "./SignUpUpdateItem";

import classes from "./SignUpUpdateList.module.css";

function SignUpUpdateList({ items }) {
  const itemComponents = items.map((item) => <SignUpUpdateItem item={item} />);
  return <ul className={classes.list}>{itemComponents}</ul>;
}
export default SignUpUpdateList;

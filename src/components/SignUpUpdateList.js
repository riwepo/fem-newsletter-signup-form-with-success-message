import React from "react";
import SignUpUpdateItem from "./SignUpUpdateItem";

function SignUpUpdateList({ items }) {
  const itemComponents = items.map((item) => <SignUpUpdateItem item={item} />);
  return <ul>{itemComponents}</ul>;
}
export default SignUpUpdateList;

import React from "react";

export default function Menu(props) {
  return (
    <div className="menu-wrapper">
      <iframe title="menu" src={props.url} scrolling="no" />
    </div>
  );
}

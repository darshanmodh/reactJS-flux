import React from "react";

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { completed, edit, text } = this.props;

    const icon = completed ? "\u2714" : "\u2716";

    return (
      <li>
        <span> {text} </span>
        <span> {icon} </span>
      </li>
    );
  }
}

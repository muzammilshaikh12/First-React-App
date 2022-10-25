import React from "react";

import "./ErrorModal.css";

import Card from "./Card";

import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}></div>
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className="content">{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

import React from "react";
import "./greetinguser.css";

export default function GreetingUser(props: any) {
  return (
    <div className="container-greeting">
      <div className="container">
        <div>
          <h1 className="user-name-head">Welcome {props.userName}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

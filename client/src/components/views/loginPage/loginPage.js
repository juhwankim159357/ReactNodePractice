import React, { useState } from "react";
import { useDispatch } from "react-redux";

//import { useDispatch } from 'react-redux'
import { loginUser } from "../../../_actions/user_action";
import {withRouter} from 'react-router-dom'
function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandeler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      console.log(res)
      if (res.payload.loginSuccess) props.history.push("/");
      else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "cemter",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandeler}
      >
        <label>Email</label>
        <input
          type="email"
          value={Email}
          onChange={onEmailHandler}
          placeholder="email needed"
        />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
        <a href="/register">Sign up</a>
      </form>
     
      
    </div>
    
    
  );
}

export default withRouter(LoginPage);

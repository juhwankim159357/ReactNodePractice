import React, { useEffect } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom'
function LandingPage(props) {
  useEffect(() => {
    axios.get("https://fervent-einstein-b3e38f.netlify.app/api/hello").then((res) => console.log(res.data));
  }, []);

  const onClickHandler = () => {
    axios.get("https://fervent-einstein-b3e38f.netlify.app/api/users/logout").then((res) => {
      if (res.data.success) props.history.push("/login");
    });
  };

  return (
    <div>
      landingPage
      <br />
      <a href="/login">login</a>
      <br />
      <a href="/register">sign up</a>
      <br />
      <button onClick={onClickHandler}>log out</button>
    </div>
  );
}

export default withRouter(LandingPage);

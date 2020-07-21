import React, { Fragment } from "react";
import SimpleHeader from "Components/Header/SimpleHeader";

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <SimpleHeader></SimpleHeader>
        <div>
          登录
        </div>
      </Fragment>
    )
  }
}

export default Login;
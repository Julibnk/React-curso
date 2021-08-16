import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = React.useContext(AuthContext);
  const handleLogin = () => {
    dispatch({ type: types.login, payload: { name: "Julian" } });

    const lastPath = localStorage.getItem("lastpath") || "/";
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

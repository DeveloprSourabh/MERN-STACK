import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfuly");
      navigate("/");
    }
  };

  return (
    <>
      <div style={{ padding: "15rem 5rem 22rem 40rem" }} className="ctr">
        <h1 className="signupheading">LOGIN</h1>
        <form method="POST">
          <div className="form-group row">
            <div className="col-sm-6 mt-5 ml-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="input"
                className="form-control"
                id="inputPassword10"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6 ml-5">
              <input
                onChange={(e) => setPassword(e.target.password)}
                value={password}
                placeholder="Password"
                type="password"
                className="form-control"
                id="inputPassword9"
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }} className="form-group row">
            <div className="ml-5 col-sm-6">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginUser}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

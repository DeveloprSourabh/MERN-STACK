import React from "react";

const Login = () => {
  return (
    <>
      <div style={{ padding: "15rem 5rem 22rem 40rem" }} className="ctr">
        <h1 className="signupheading">LOGIN</h1>
        <form>
          <div className="form-group row">
            <div className="col-sm-6 mt-5 ml-5">
              <input
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
                placeholder="Password"
                type="password"
                className="form-control"
                id="inputPassword9"
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }} className="form-group row">
            <div className="ml-5 col-sm-6">
              <button type="submit" className="btn btn-primary">
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

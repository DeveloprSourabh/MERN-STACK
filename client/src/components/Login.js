import React from "react";

const Login = () => {
  return (
    <>
      <div style={{ padding: "15rem 5rem 22rem 40rem" }} className="ctr">
        <h1 className="signupheading">LOGIN</h1>
        <form>
          <div class="form-group row">
            <div class="col-sm-6 mt-5 ml-5">
              <input
                placeholder="Email"
                type="input"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6 ml-5">
              <input
                placeholder="Password"
                type="password"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }} class="form-group row">
            <div class="ml-5 col-sm-6">
              <button type="submit" class="btn btn-primary">
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

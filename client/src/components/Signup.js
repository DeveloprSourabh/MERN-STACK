import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <>
      <div style={{ padding: "15rem 5rem 22rem 40rem" }} className="ctr">
        <h1 className="signupheading">SIGN UP</h1>
        <form>
          <div class="form-group row">
            <div class="col-sm-6 mt-5 ml-5">
              <input
                placeholder="Name"
                type="input"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6 ml-5">
              <input
                placeholder="Email"
                type="input"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6  ml-5">
              <input
                placeholder="Work"
                type="input"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6 ml-5">
              <input
                placeholder="Phone"
                type="number"
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
          <div class="form-group row">
            <div class="col-sm-6 ml-5">
              <input
                placeholder="Confirm Password"
                type="password"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }} class="form-group row">
            <div class="ml-5 col-sm-6">
              <button type="submit" class="btn btn-primary">
                Sign up 
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

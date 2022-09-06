import { useState, useHistory } from "react";
import React from "react";
import "./style.css";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json;
    if (data.status === 422 || !data) {
      window.alert("Register Failed");
      console.log("Register Failed");
    } else {
      window.alert("Register Successfuly");
      console.log("Register Successfuly");

      history.push("/login");
    }
  };

  return (
    <>
      <div style={{ padding: "15rem 5rem 22rem 40rem" }} className="ctr">
        <h1 className="signupheading">SIGN UP</h1>
        <form method="POST">
          <div class="form-group row">
            <div class="col-sm-6 mt-5 ml-5">
              <input
                placeholder="Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
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
                name="email"
                value={user.name}
                onChange={handleInputs}
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
                value={user.work}
                onChange={handleInputs}
                type="input"
                name="work"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6 ml-5">
              <input
                placeholder="Phone"
                value={user.phone}
                name="phone"
                onChange={handleInputs}
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
                value={user.password}
                onChange={handleInputs}
                type="password"
                name="password"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6 ml-5">
              <input
                placeholder="Confirm Password"
                value={user.cpassword}
                name="cpassword"
                onChange={handleInputs}
                type="password"
                class="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <div style={{ textAlign: "center" }} class="form-group row">
            <div class="ml-5 col-sm-6">
              <button type="submit" class="btn btn-primary" onClick={PostData}>
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

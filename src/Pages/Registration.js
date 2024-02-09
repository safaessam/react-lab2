import React, { useState } from "react";

function Register() {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    UserName: "",
    Pass: "",
    RepeatPass: ""
  });
  const [errors, setErrors] = useState({
    NameErr: "",
    UserNameErr: "",
    EmailErr: "",
    PassErr: "",
    RepeatPassErr: ""
  });

  const changeData = (e) => {
    if (e.target.name === "userEmail") {
      setUserData({
        ...userData,
        Email: e.target.value
      });

      setErrors({
        ...errors,
        EmailErr:
          e.target.value.length === 0
            ? "Required Email"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
            ? "Email is not correct"
            : ""
      });
    } else if (e.target.name === "userpass") {
      setUserData({
        ...userData,
        Pass: e.target.value
      });

      setErrors({
        ...errors,
        PassErr:
          e.target.value.length === 0
            ? "Required password"
            : e.target.value.length < 8
            ? "Password is less than 8 characters"
            : !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(
                e.target.value
              )
            ? "Password must contain at least one lowercase, one uppercase, one digit, one special character, and be at least 8 characters long"
            : ""
      });
    } else if (e.target.name === "userRepeatpass") {
      setUserData({
        ...userData,
        RepeatPass: e.target.value
      });

      setErrors({
        ...errors,
        RepeatPassErr:
          e.target.value.length === 0
            ? "Required Repeat password field"
            : e.target.value !== userData.Pass
            ? "Passwords do not match"
            : ""
      });
    } else if (e.target.name === "Name") {
      setUserData({
        ...userData,
        Name: e.target.value
      });

      setErrors({
        ...errors,
        NameErr: e.target.value.length === 0 ? "Required Name field" : ""
      });
    } else if (e.target.name === "UserName") {
      setUserData({
        ...userData,
        UserName: e.target.value
      });

      setErrors({
        ...errors,
        UserNameErr:
          e.target.value.length === 0
            ? "Required User Name field"
            : /\s/g.test(e.target.value)
            ? "No spaces allowed in User Name"
            : ""
      });
    }
  };

  const submitUserData = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      // Store user data in local storage
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("User data stored in local storage");
    } else {
      console.log("There are errors in the form. Please correct them.");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center">Register</h1>
        <form onSubmit={submitUserData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              value={userData.Name}
              onChange={changeData}
            />
            <p className="text-danger">{errors.NameErr}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="userEmail"
              value={userData.Email}
              onChange={changeData}
            />
            <p className="text-danger">{errors.EmailErr}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="UserName"
              value={userData.UserName}
              onChange={changeData}
            />
            <p className="text-danger">{errors.UserNameErr}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="userpass"
              value={userData.Pass}
              onChange={changeData}
            />
            <p className="text-danger">{errors.PassErr}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repeatPassword"
              name="userRepeatpass"
              value={userData.RepeatPass}
              onChange={changeData}
            />
            <p className="text-danger">{errors.RepeatPassErr}</p>
          </div>

          <button
            disabled={
              errors.PassErr || errors.EmailErr || errors.UserNameErr
            }
            type="submit"
            className="btn btn-primary w-100"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
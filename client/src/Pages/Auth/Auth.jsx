import { useState } from "react";
import { UilShutter } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";
import "./Auth.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      formData.password === formData.confirmpassword
        ? dispatch(signUp(formData))
        : setConfirmpassword(false);
    } else {
      dispatch(logIn(formData));
    }
  };

  const resetForm = () => {
    setConfirmpassword(true);
    setFormData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      username: "",
    });
  };

  return (
    <div className="auth">
      {/* Left Side */}
      <div className="a__left">
        <UilShutter width="65" height="70" style={{ color: "var(--blue)" }} />
        <div className="app__name">
          <h1>U-Book</h1>
          <h6>Explore Ideas throughout the World</h6>
        </div>
      </div>

      {/* Right Side */}

      <div className="a__right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={formData.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>

          <div>
            <input
              type="Password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            {isSignUp && (
              <input
                type="Password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpassword"
                onChange={handleChange}
                value={formData.confirmpassword}
              />
            )}
          </div>
          <span
            style={{ display: confirmpassword ? "none" : "block" }}
            className="confirmPass"
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "15px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account?  Login"
                : "Don't have an account?  Sign up"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="Submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? " Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

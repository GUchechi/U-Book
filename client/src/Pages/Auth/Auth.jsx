import { UilShutter } from "@iconscout/react-unicons";
import "./Auth.css";
import { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
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
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
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
            />
          </div>

          <div>
            <input
              type="Password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                type="Password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpassword"
                onChange={handleChange}
              />
            )}
          </div>
          <div>
            <span
              style={{ fontSize: "15px", cursor: "pointer" }}
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp
                ? "Already have an account?  Login"
                : "Don't have an account?  Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="Submit">
            {isSignUp ? " Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

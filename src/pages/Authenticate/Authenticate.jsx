import { useState } from "react";
import "./Authenticate.css";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <>
      <div className="authenticate">
        <div className="auth__left">
          <img
            src="https://i.imgur.com/P3Vm1Kq.png"
            alt="Instagram Screenshots"
          />
        </div>
        <div className="auth__right">
          {active === "login" ? <Login /> : <Signup />}

          <div className="auth__more">
            <span>
              {active === "login" ? (
                <>
                  Dont have an account?{" "}
                  <button onClick={handleChange}>Sign Up</button>
                </>
              ) : (
                <>
                  Have an account?{" "}
                  <button onClick={handleChange}>Log in</button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authenticate;

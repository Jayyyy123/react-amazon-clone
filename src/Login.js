import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      // create user function
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully create user with email and password
        if (auth) {
          // push the login page to hompage after creating account
          history.push("/");
        }
      })
      // pop up the error if there is an error
      .catch((error) => alert(error.message));
    // do some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.kumulos.com/wp-content/uploads/2013/08/amazon-logo-preview.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By sign-ing in you agree to Amazon's FAKE Clone Conditions of Use &
          Sales. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/context";

const SignUp = () => {
  const { message, signIn, setEmail, setPassword, email, password } =
    useGlobalContext();

  // SIGN IN FUNCTION OF EXISTING USERS
  return (
    <div className="flex flex-col items-center bg-light-body dark:bg-dark-body">
      <div className="signIn mt-4 bg-white">
        <h2 className="font-bold pb-3">Sign In</h2>
        <div className="form">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 text-light-text"
            style={{
              width: "100%",
              padding: "5px",
              border: "2px",
              borderRadius: "5px",
              borderColor: "red",
            }}
          />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {message}
          </span>

          <h5 className="mt-4">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-light-text"
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              borderColor: "red",
            }}
          />
        </div>
        <button
          className="w-full text-cards-light bg-hover-dark p-2 round my-4"
          onClick={() => signIn()}
        >
          SIGN IN
        </button>
      </div>
      <div className="createAccount">
        <hr className="my-3" />
        <p className="text-center">New to Coder's-Den Blog?</p>
        <hr className="my-3" />
        <Link to="/createaccount">
          <button className="w-full bg-body-slate p-2 round">
            CREATE ACCOUNT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

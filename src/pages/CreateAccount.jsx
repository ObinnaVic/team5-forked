import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/context";

function CreateAccount() {
  const {
    newEmail,
    setNewEmail,
    newPassword,
    setNewPassword,
    name,
    setName,
    confirmNewPassword,
    setConfirmNewPassword,
    createAccount,
    emailValidMessage,
  } = useGlobalContext();
  return (
    <div className="flex flex-col items-center bg-light-body dark:bg-dark-body ">
      <div className="signIn mt-4 bg-white mb-7">
        <h2 className="font-bold pb-3"> Create Account</h2>
        <div className="form">
          <h5>Email</h5>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="text-light-text"
            style={{
              width: "100%",
              padding: "5px",
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
            {emailValidMessage}
          </span>

          <h5 className="mt-4">Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-light-text"
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              borderColor: "red",
            }}
          />
          <h5 className="mt-4">Password</h5>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="text-light-text"
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              borderColor: "red",
            }}
          />
          <h5 className="mt-4">Confirm Password</h5>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
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
          className="w-full text-light-text dark:text-dark-text bg-head-blue p-2 round my-4"
          onClick={() => createAccount()}
        >
          CREATE ACCOUNT
        </button>
        <hr />
        <p className="text-center">
          Already have an account?
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;

import React, { useState } from "react";

const AuthForm = ({ buttonText, buttonSign, handleSubmit, slug }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, emailAddress, password);
      }}
    >
      <div className="form-group">
        <label htmlFor="signup-email">Email address</label>
        <input
          type="email"
          className="form-control"
          id={`${slug}-emailAddress`}
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          className="form-control"
          id={`${slug}-password`}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col text-center">
        <button type="submit" className="btn btn-primary">
          {buttonText}
        </button>
        |
        <button type="submit" className="btn btn-primary">
          {buttonSign}
        </button>
      </div>
      <div>
          <h5>Hold on little fella!</h5>
          <h6>Do you have permission from your parents?</h6>
          <h6>If not, go wrangle them up and lets get this started!</h6>
      </div>

    </form>
  );
};

export default AuthForm;
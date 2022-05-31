import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404, Error</h1>
      <h3>Page Not Found</h3>
      <Link to="/"> Go To Home Page</Link>
    </>
  );
};

export default Error;

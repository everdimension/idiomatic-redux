import React from 'react';
import { Link } from 'react-router';


function Footer() {
  return (
    <p>
      Show:
      {" "}
      <Link to="/">
        All
      </Link>
      {", "}
      <Link to="/active">
        Active
      </Link>
      {", "}
      <Link to="/completed">
        Completed
      </Link>
    </p>
  );
}

export default Footer;

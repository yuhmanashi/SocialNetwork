import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logOut }) => {
  const display = currentUser ? (
    <div>
      <p> {currentUser.username}</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">Social Network</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
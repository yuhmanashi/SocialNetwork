import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, logOut }) => {
  const display = user ? (
    <div>
      <p> {user.first_name}</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  ) : (
    <div>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};
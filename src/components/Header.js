import React from 'react';

export default function Header() {
  return (
    <div className="container-fluid bg-light p-5 mb-3">
      <h1 className="display-4">Github Users Finder</h1>
      <h2>Search users in GitHub using this simple app.</h2>
      <p>
        Click on the card to see more detail about individual user. The search
        default is dongmokevin (me!)
      </p>
    </div>
  );
};

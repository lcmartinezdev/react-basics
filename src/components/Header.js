import React from 'react';


export const Header = (props) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <a className="navbar-brand" href="#">Navbar</a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">{props.textHomeLink} <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React  from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <Link to='/' className="navbar-brand">My Awesome Store</Link>
          <ul className="nav navbar-nav">
            <li><Link to="/categories">Categories</Link></li>
            <li>
              <Link to="/cart">
                <span className="glyphicon glyphicon-shopping-cart"></span>
                <span className="badge">4</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
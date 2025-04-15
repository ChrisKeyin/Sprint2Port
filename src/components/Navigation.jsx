import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ page }) {
  return (
    <nav className={`navBox-${page}`}>
      {page === 'index' ? (
        <Link to="/works">Works</Link>
      ) : (
        <Link to="/">Home</Link>
      )}
    </nav>
  );
}

export default Navigation;
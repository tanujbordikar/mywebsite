import React from 'react';
import Link from 'next/link';

const Header = () => {

  return (
    <header>
      <nav className="container">
        <ul>
            <Link className="nav" href="/">home</Link>
            <Link className="nav" href="/about">about</Link>
            <Link className="nav" href="/projects">projects</Link>
            <Link className="nav" href="/blogs">blogs</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

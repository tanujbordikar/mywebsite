import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const siteOwner = 'tanujbordikar.';

  return (
    <footer>
      <div className='container'>
        <p>&copy; {currentYear} {siteOwner}</p>
      </div>
    </footer>
  );
};

export default Footer;

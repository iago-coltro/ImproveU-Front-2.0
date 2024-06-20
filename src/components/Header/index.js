import React, { useState } from 'react';
import './Header.module.css'

function Header(props) {

  return (    
      <div className="header">
        <div className="logo">
          <span className="improve">Improve</span>
          <span className="letter-u">U</span>
        </div>
        <div className="title">props.title</div> 
      </div>
  );
}

export default Header;
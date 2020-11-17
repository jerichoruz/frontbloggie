import React from 'react';

import Header from './Header';
import './auth.css';

const LayoutAuth = ({ children }) => (
  <div>
    <Header />
    <div id="content" className="container">
      {children}
    </div>
  </div>
);

export default LayoutAuth;

import React from 'react';

const Spinner = ({ show }) => (
  <>
    {show && (
      <div className="loading-container">
        <i className="fa fa-spinner fa-spin fadeInOut" />
      </div>
    )}
  </>
);

export default Spinner;

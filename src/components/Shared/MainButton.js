import React from 'react';

const mainButton = (props) => {
  return (
    <button className="btn border-0 font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">{props.children}</button>
  );
};

export default mainButton;
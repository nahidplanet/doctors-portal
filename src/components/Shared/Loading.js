import React, { useState } from 'react';
import { css } from "@emotion/react";
import { ClockLoader } from 'react-spinners';
const Loading = () => {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#14D1D0");
  return (
    <div className="sweet-loading w-full h-[50vh] flex justify-center items-end">
      <ClockLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
};

export default Loading;




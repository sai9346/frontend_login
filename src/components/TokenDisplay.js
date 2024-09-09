import React from 'react';

const TokenDisplay = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  return (
    <div>
      <h2>Token Information</h2>
      <div>
        <strong>Access Token:</strong> <pre>{accessToken}</pre>
      </div>
      <div>
        <strong>Refresh Token:</strong> <pre>{refreshToken}</pre>
      </div>
    </div>
  );
};

export default TokenDisplay;

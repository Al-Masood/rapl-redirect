// src/RedirectPage.js
import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace('https://rapl.site');
  }, []);

  return (
    <div>
      <p>Redirecting to rapl.site...</p>
    </div>
  );
};

export default RedirectPage;

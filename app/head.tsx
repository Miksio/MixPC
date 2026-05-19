// next.js app router head component for favicons/metadata
import React from 'react';

export default function Head() {
  return (
    <>
      {/* explicit favicon link ensures the browser knows which file to load */}
      <link rel="icon" href="/mixpc_logo1.png" sizes="32x32" type="image/png" />
    </>
  );
}

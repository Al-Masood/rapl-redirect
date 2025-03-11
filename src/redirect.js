import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace('https://rapl.site');
  }, []);

  return <p>Redirecting to rapl.site...</p>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes if needed */}
        <Route path="*" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;

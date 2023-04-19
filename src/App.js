import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((each) => (
          <Route Key={each.path} path={each.path} element={each.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes(localStorage.getItem("userID"));
  return (
      <Router>        
        <div className="container">{routes}</div>
      </Router>
  );
}
export default App;

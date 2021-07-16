import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useRoutes } from './routes';

import 'css/reset.css';
import 'css/default.css';
import 'css/authorization-style.css';
import 'css/posts-style.css';
import 'css/comments-style.css';

function App() {
  const routes = useRoutes(parseInt(localStorage.getItem('userID'), 16));
  return (
    <Router>
      <div className='container'>{routes}</div>
    </Router>
  );
}
export default App;

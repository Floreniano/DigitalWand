import { BrowserRouter as Router } from 'react-router-dom';
// css
import 'css/index.css';

import { useRoutes } from './routes';

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <div className='container'>{routes}</div>
    </Router>
  );
}

export default App;

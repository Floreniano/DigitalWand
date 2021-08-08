import { BrowserRouter as Router } from 'react-router-dom';

import 'css/reset.css';
// libs
import 'css/slick.css';
import 'nouislider/distribute/nouislider.css';
// css
import 'css/default.css';
import 'css/catalog.css';
import 'css/basket.css';
import 'css/card.css';

import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(1);
  return (
    <Router>
      <div className='container'>{routes}</div>
    </Router>
  );
}

export default App;

import { createRoot } from 'react-dom/client';
import City from './components/city/City.jsx';
import './global.css';
import { cities } from './cz-cities.js';

const App = () => (
  <div>
      {cities.map(c => <City key={c.name} name={c.name} photo={c.photo} population={c.population} area={c.area} district={c.district}></City>)}
  </div>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);

import logo from './logo.svg';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css';
import Home from './views/Home';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

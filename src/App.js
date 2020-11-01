import logo from './logo.svg';
import './App.css';
import Preconditions from './components/Preconditions'
import Conditions from './components/Conditions'
import Welcome from './components/Welcome'

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
   <div className="App">
      <header className="App-header">       
        <Route exact path="/" component={Welcome} />    
        <Route exact path="/prec" component={Preconditions} />            
        <Route exact path="/cond" component={Conditions} />      
      </header>
    </div>
    </Router>
  );
}

export default App;

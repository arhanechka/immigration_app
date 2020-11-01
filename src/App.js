import './App.css';
import Preconditions from './components/Preconditions'
import Conditions from './components/Conditions'
import Welcome from './components/Welcome'
import DataCenter from './components/DataCenter'
import { Provider } from "react-redux";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <Router>
   <div className="App">
      <header className="App-header">       
        <Route exact path="/" component={Welcome} />    
        <Route exact path="/prec" component={Preconditions} />            
        <Route exact path="/cond" component={Conditions} />  
        <Route exact path="/result" component={DataCenter} />      
      </header>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

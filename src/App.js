import './App.css';
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
        <Route exact path="/prec" render={(props) => <Conditions {...props} title={`Preconditions`}/>} />            
        <Route exact path="/cond" render={(props) => <Conditions {...props} title={`Conditions`}/>} />
        <Route exact path="/result" component={DataCenter} />      
      </header>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

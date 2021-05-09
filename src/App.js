
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
   
      <Switch>
      <Route path = "/login">
         <Login/>
        </Route>
        <Route path = "/checkout">
        <Header/>
         <Checkout/>
        </Route>
        <Route exact component path = "/">  
        <Header/> 
     <Home/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

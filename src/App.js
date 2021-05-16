import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import { Profile } from './Profile';
import { Login } from './Login';
import Navbarrr from './Navbarrr';

function App() {
  return (
    <div>
    <div>
    
    <Navbarrr/>
    
    </div>
   <div>
    <Router>
   
   <Switch>
  
    <Route exact path="/login" component={Login}/>
    <Route exact path="/profile" component={()=><Profile authorized={true}/>}/>
   
   </Switch>
   
   </Router>
   </div>
   </div>
  );
}

export default App;

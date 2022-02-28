import {Route, Switch, useHistory} from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup';


const App = () => {

  const history = useHistory()

  history.push('/login')

  return (
    
    <>
      <Switch>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>
        <Route exact path='/user/dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </>
  );
}

export default App;

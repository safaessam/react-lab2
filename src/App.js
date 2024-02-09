import './App.css';
import Navbar from './Navbar';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import ToDo from './Pages/ToDo'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NotFound from './Pages/NotFound';
function App() {
  return (
    <div>
    <BrowserRouter> 
      <Navbar />
      <Switch> 
          <Route exact path={"/login"} component={Login} /> 
          <Route exact path={"/registeration"} component={Register} />
          <Route exact path={"/todo"} component={ToDo} />
          <Route exact path={"*"} component={NotFound} />
        </Switch> 
    </BrowserRouter>
</div>
 );
}

export default App;
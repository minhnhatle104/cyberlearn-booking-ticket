import './App.css';
import { createBrowserHistory } from "history"
import { Router, Switch,Route } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from "./pages/Home/Home"
import News from './pages/News/News';
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Detail from './pages/Detail/Detail';

export const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path="/detail/:id" exact Component={Detail} />
          <Route path="/login" exact Component={Login} />
          <Route path="/register" exact Component={Register} />
          <HomeTemplate path="/" exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
// pages
import Home from './pages/Home'
import Error from './pages/Error'
import SingleBook from './pages/SingleBook'
import About from './pages/About'
// router dom
import { Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/d' component={SingleBook}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;

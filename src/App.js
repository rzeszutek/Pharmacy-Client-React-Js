import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './components/Home';
import Medicines from './components/Medicines';
import Equipment from './components/Equipment';
import Prescriptions from './components/Prescriptions';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div class="App" style={{ overflowX: "hidden" }}>
        <Menu></Menu>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/medicine" component={Medicines}/>
          <Route path="/equipment" component={Equipment}/>
          <Route path="/prescription" component={Prescriptions}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

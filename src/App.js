import './App.css';
import Menu from './components/Menu/Menu.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Medicine from './components/Medicines/Medicine.js';
import Equipment from './components/Equipment/Equipment.js';
import Prescription from './components/Prescription/Prescription.js';
import Contact from './components/Contact/Contact.js';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div class="App" style={{ overflowX: "hidden" }}>
        <Menu></Menu>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/medicine" component={Medicine}/>
          <Route path="/equipment" component={Equipment}/>
          <Route path="/prescription" component={Prescription}/>
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

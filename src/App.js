
import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import {Home} from "./pages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Redirect to="/" />

        </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;

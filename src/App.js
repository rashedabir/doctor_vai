import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Appoinment from "./components/Appoinment";
import Booking from "./components/Booking";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact="true" path="/" component={Home} />
        <Route exact="true" path="/appoinment" component={Appoinment} />
        <Route exact="true" path="/booking" component={Booking} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

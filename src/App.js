import Title from "./component/Title";
import Preparation from "./component/Preparation";
import Rule from "./component/Rule";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element = {<Title />} />
      <Route path="/Preparation" element = {<Preparation />} />
      <Route path="/ruleplay" element = {<Rule />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

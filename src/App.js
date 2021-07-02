import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import {Route, Switch} from "react-router-dom";
import Login from './pages/Login';
import UploadVideo from './pages/UploadVideo';


function App() {
  return (
    <>
    <Router>
    <Route exact path="/video" component={UploadVideo} />
         <Route exact path="/" component={Login} />
    </Router>

    </>
  );
}

export default App;

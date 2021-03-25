import './App.css';
import Page from "./components/page/Page"
import SignIn from "./components/signin/SignIn"
import SignUp from "./components/signup/SignUp"
import Upload from "./components/upload/Upload"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Page}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/upload" component={Upload}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

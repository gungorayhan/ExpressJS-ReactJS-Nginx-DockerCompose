import './App.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import { Fragment } from 'react';
import MainComponent from './MainComponent';


function App() {
  return (
    <Router>
      <Fragment>
      <header className="header">
        <div>This is multicontainer application</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={MainComponent}></Route>
        <Route path="/otherpage" component={OtherPage}></Route>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;

import '../styles/App.css';
import { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt do nas</h1>

const ErrorPage = () => <h1>Strona nie istnieje</h1>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
          Store
      </Router>
    );
  }
}
 
export default App;


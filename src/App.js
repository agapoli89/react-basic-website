import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt do nas</h1>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
        <>
          <header>
            <nav>
              <ul>
                <li><NavLink to="/" exact activeClassName="menu_selected">Start</NavLink></li>
                <li><NavLink to="/news" activeClassName="menu_selected">Aktualności</NavLink></li>
                <li><NavLink to="/contact" activeClassName="menu_selected">Kontakt</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/news" component={News}/>
          </section>
        </>
      </Router>
    );
  }
}
 
export default App;


import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
                <li><Link to="/">Start</Link></li>
                <li><Link to="/news">Aktualności</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
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


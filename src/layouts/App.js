import '../styles/App.css';
import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() { 
    return ( 
      <Router>
          <div className="app">
            <header>
              {<Header />}
            </header>
            <main>
              <aside>
                {<Navigation />}
              </aside>
              <section className="page">
                {<Page />}
              </section>
            </main>
            <footer>{<Footer />}</footer>
          </div>
      </Router>
    );
  }
}
 
export default App;


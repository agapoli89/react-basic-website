import { Route, Switch } from 'react-router-dom';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';
import '../styles/Header.css';

const Header = () => {

    return ( 
     <Switch>
        <Route path="/" exact render={() => (
            <img src={header1} alt="dogs" />
        )}/>
        <Route path="/contact" render={() => (
            <img src={header1} alt="dogs" />
        )}/>
        <Route path="/products" render={() => (
            <img src={header2} alt="tulips" />
        )}/>
        <Route path="/admin" render={() => (
            <img src={header3} alt="foks" />
        )}/>
        <Route render={() => (
            <img src={header1} alt="dogs" />
        )}/>
      </Switch>    
    );
}
 
export default Header;
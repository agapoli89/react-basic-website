import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return ( 
        <div>
            <h2>Moja strona 2021</h2>
            <Route path="/" exact render={props => <p>Jesteś na stronie głównej</p>} />
            <Route path="/:page" exact render={props => {
            return (
                <p>Jesteś na <span>{props.match.params.page}</span></p>
            )
            }} />
        </div>
    );
}
 
export default Footer;
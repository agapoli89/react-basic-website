import '../styles/LoginForm.css';
import { useContext, /* useEffect, useHistory */ } from 'react';

import { PermissionContext } from './PermissionContext';

const LoginPage = () => {
    const { /* isUserLogged, */ toggleLoggedState } = useContext(PermissionContext);
    //const history = useHistory();

    /* useEffect(() => {
        if (isUserLogged) {
            // eslint-disable-next-line no-restricted-globals
          history.push("/admin");
        }
        // eslint-disable-next-line no-restricted-globals
    },[isUserLogged,history]) */

    return ( 
        <form className="login__form">
            <label htmlFor="login">Podaj login<input type="text" id="login" className="login__input"/></label>
            <label htmlFor="password">Podaj hasło<input type="password" id="password" className="login__input"/></label>
            <button className="login__button" onClick={toggleLoggedState}>Zaloguj</button>
        </form>
    );
}
 
export default LoginPage;
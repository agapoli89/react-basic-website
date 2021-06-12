import '../styles/LoginForm.css';
import { useContext, /* useEffect, useHistory */ } from 'react';

import { PermissionContext } from './PermissionContext';

const LoginPage = () => {
    const { toggleLoggedState } = useContext(PermissionContext);

    return ( 
        <div className="login__form">
            <label htmlFor="login">Podaj login<input type="text" id="login" className="login__input"/></label>
            <label htmlFor="password">Podaj hasło<input type="password" id="password" className="login__input"/></label>
            <button className="login__button" onClick={toggleLoggedState}>Zaloguj</button>
        </div>
    );
}
 
export default LoginPage;
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import { PermissionContext } from './PermissionContext';

const AdminPage = () => {
    const { isUserLogged, toggleLoggedState } = useContext(PermissionContext);
    return (
        <Route render={() => (
            isUserLogged ? (<><h3>Panel admina - dzień dobry</h3><button onClick={toggleLoggedState}>Wyloguj</button></>) : (
                <Redirect to="/login" />
            )
        )}/>
    );
}
 
export default AdminPage;
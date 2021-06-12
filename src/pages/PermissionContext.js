import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const PermissionContext = createContext();

const AppProvider = ({children}) => {

    const history = useHistory();
    const [isUserLogged, setIsUserLogged] = useState(true);

    const handleToggleStateIsLogged = () => {
        setIsUserLogged(prevValue => !prevValue);

        const location = {
            pathname: '/admin',
            state: {
                isActive: true,
            }
        };

        history.push(location);
    };

    return ( 
        <PermissionContext.Provider 
            value={{
            isUserLogged,
            toggleLoggedState: handleToggleStateIsLogged
          }}>
            {children}
        </PermissionContext.Provider>
    );
}
 
export default AppProvider;
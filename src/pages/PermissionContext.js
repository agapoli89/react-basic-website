import { createContext, useState } from 'react';

export const PermissionContext = createContext();

const AppProvider = ({children}) => {

    const [isUserLogged, setIsUserLogged] = useState(true);

    const handleToggleStateIsLogged = () => setIsUserLogged(prevValue => !prevValue);

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
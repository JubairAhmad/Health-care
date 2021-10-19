import React, { createContext } from 'react';
import useAPI from '../components/Hooks/useAPI';
// import useAPI from '../Hooks/useAPI';
import useFireBase from '../components/Hooks/useFireBase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const AllContexts =useFireBase();
    const {useApi} =useAPI()
    const data = {AllContexts, useApi};
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;
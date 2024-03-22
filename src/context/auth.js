import React, { createContext, useState } from "react";
import implement, { Interface, type } from 'implement-js'


const AuthData = Interface('AuthData')({
    auth: {
        toke: String,
        email: String,
        name: String,
    }
})


const AuthContextData = Interface('AuthContextData')  ({
    AuthData?: AuthData,
    signIn: (email: String, password: String ) => Promise<AuthData>
    signOut: () => Promise<void>
})

export const authContext = createContext<AuthContextData>({
} as AuthContextData,
);


export function authProvider: React.FC = ({children}) = {
    const [authData, setAuthData] = useState<authData>();

    async function signIn(): Promise<AuthData>{
        //login da aplicação
    }

    function signOut(){
        //deslogar da aplicação
    }

    return(
    <authContext.Provider value={{authData, signIn, signOut}}>
        {children}
    </authContext.Provider>

    )
}
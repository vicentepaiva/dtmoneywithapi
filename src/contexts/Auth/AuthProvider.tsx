import { AuthContext } from "./AuthContext";
import { ReactNode, useState } from 'react';
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";
import { useEffect } from 'react';

type AuthProviderProps = {
    children: ReactNode;
}


export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData)
                if (data.user) {
                    setUser(data.user)
                }
            }
        }
        validateToken();
    }, [api])


    const signIn = async (email: string, password: string) => {
        const data =  await api.signin(email, password)
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signOut = async () => {
        await api.logout();
        setUser(null);
        setToken('');
    }

    function setToken(token: string) {
        localStorage.setItem('authToken', token);
    }

    return(
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
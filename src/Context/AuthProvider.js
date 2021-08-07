import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/config';
import { Spinner } from 'reactstrap';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    // lắng nghe đăng nhập vào ứng dụng thành công hay chưa(sucsess or error)
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName,
                    email,
                    uid,
                    photoURL,
                });
                setIsLoading(false);
                // history.push('/home');
                return;
            }
            setIsLoading(false);
            history.push('/login');
        });

        return () => {
            unsubscribe();
        };
    }, [history]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spinner color="primary" /> : children}
        </AuthContext.Provider>
    );
}

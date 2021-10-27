import { useHistory, Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../Firebase/config';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const history = useHistory();
    const emailUser = JSON.parse(localStorage.getItem('emailForRegistration'));

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { email } = user;
                window.localStorage.setItem(
                    'emailForRegistration',
                    JSON.stringify(email),
                );
                db.collection('users').onSnapshot((snapshot) => {
                    const data = snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    const array = { data }.data;
                    array.forEach((user) => {
                        if (user.email === emailUser) {
                            setUser(user);
                        }
                    });
                });
                return;
            }
            history.push('/login');
        });
        return () => {
            unsubscribe();
        };
    }, [emailUser, history]);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}

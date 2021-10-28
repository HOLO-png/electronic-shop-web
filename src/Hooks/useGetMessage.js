import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import firebase from '../Firebase/config';

export function useGetMessage(uid) {
    const data = useContext(AuthContext);
    var db = firebase.firestore();
    const [message, setMessage] = useState(null);
    const { id } = data.user;

    useEffect(() => {
        const unsubscribe = db
            .collection('conversations')
            .onSnapshot((querySnapshot) => {
                const messages = [];
                querySnapshot.forEach((doc) => {
                    messages.push(doc.data());
                });
                setMessage(messages);
            });

        return unsubscribe;
    }, [db, id]);

    return message;
}

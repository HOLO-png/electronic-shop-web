import firebase, { auth, db } from './config';
import { addDocument } from './Services';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();

export const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    setTimeout(() => {
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.displayName,
                providerId: additionalUserInfo.providerId,
            });
        }
    }, 1000);
};
export const handleGgLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(ggProvider);
    setTimeout(() => {
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.displayName,
                providerId: additionalUserInfo.providerId,
            });
        }
    }, 1000);
};

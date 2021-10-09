import { Dispatch } from 'redux';
import { getAuth, signInWithPopup, UserCredential } from 'firebase/auth';

import { googleProvider } from '../firebase/firebase.config';
import { AuthReducerType } from '../reducers/authReducer';

export const loginMailPassword = (email: string, password: string) => {
    return (dispatch: Dispatch<AuthReducerType>) => {
        setTimeout(() => {
            //TODO: Hacer la autenticación normal
            dispatch(loginAction('123', 'Jose Palma'));
        }, 3500);
    };
};

export const loginWithGoogle = () => {
    return (dispatch: Dispatch<AuthReducerType>) => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider).then(({ user }: UserCredential) => {
            // console.log(user);
            dispatch(loginAction(user.uid, user.displayName || ''));
        });
    };
};

export const loginAction = (uid: string, name: string): AuthReducerType => ({
    type: '[auth] login',
    payload: {
        uid,
        name,
    },
});

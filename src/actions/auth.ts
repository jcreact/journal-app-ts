import { Dispatch } from 'redux';
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    UserCredential,
} from 'firebase/auth';

import { googleProvider } from '../firebase/firebase.config';
import { AuthReducerType } from '../reducers/authReducer';
import { UIReducerAction } from '../reducers/uiReducer';

import { startLoading, finishLoading, setErrorAction, clearErrorAction } from './ui';

export const loginMailPassword = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthReducerType | UIReducerAction>) => {
        dispatch(clearErrorAction());
        dispatch(startLoading());
        try {
            const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
            dispatch(loginAction(user.uid, user.displayName || ''));
        } catch (err) {
            dispatch(setErrorAction('¡Credenciales invalidas!'));
        } finally {
            dispatch(finishLoading());
        }
    };
};

export const registerWithEmailAndPassword = (
    displayName: string,
    email: string,
    password: string
) => {
    return async (dispatch: Dispatch<AuthReducerType | UIReducerAction>) => {
        dispatch(clearErrorAction());
        dispatch(startLoading());
        try {
            const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);
            await updateProfile(user, { displayName });
            dispatch(loginAction(user.uid, user.displayName || ''));
        } catch (err) {
            dispatch(setErrorAction('¡El correo ya está registrado!'));
        } finally {
            dispatch(finishLoading());
        }
    };
};

export const loginWithGoogle = () => {
    return (dispatch: Dispatch<AuthReducerType>) => {
        signInWithPopup(getAuth(), googleProvider).then(({ user }: UserCredential) => {
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

export const logout = () => {
    return async (dispatch: Dispatch<AuthReducerType>) => {
        try {
            await signOut(getAuth());
        } catch (err) {}
        dispatch(logoutAction());
    };
};

export const logoutAction = (): AuthReducerType => ({ type: '[auth] logout' });

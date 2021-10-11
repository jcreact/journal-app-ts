import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AuthRouter } from './AuthRouter';
import { ProtectedRoute } from './ProtectedRoute';
import { UnprotectedRoute } from './UnprotectedRoute';

import { JournalPage } from '../components/journal/JournalPage';
import { GlobalLoading } from '../components/ui/GlobalLoading';
import { loginAction } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user?.uid) {
                dispatch(loginAction(user.uid, user.displayName || ''));
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch]);

    return checking ? (
        <GlobalLoading />
    ) : (
        <Router>
            <div>
                <Switch>
                    <UnprotectedRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuth={loggedIn}
                        redirectPath="/"
                    />
                    <ProtectedRoute
                        exact
                        path="/"
                        component={JournalPage}
                        isAuth={loggedIn}
                        redirectPath="/auth/login"
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

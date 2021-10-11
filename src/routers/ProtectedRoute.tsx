import { Route, RouteProps, Redirect } from 'react-router';

export interface ProtectedRouteProps extends RouteProps {
    isAuth: boolean;
    redirectPath: string;
}

export const ProtectedRoute = ({ isAuth, redirectPath, ...routeProps }: ProtectedRouteProps) => {
    return isAuth ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};

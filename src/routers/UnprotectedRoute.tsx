import { Route, RouteProps, Redirect } from 'react-router';

export type UnprotectedRouteProps = {
    isAuth: boolean;
    redirectPath: string;
} & RouteProps;

export const UnprotectedRoute = ({
    isAuth,
    redirectPath,
    ...routeProps
}: UnprotectedRouteProps) => {
    return !isAuth ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};

import { Grid } from '@mui/material';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';

export const AuthRouter = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
            spacing={2}
        >
            <Grid item xs={10} sm={7} md={5} lg={4}>
                <Switch>
                    <Route exact path="/auth/login" component={LoginPage} />
                    <Route exact path="/auth/register" component={RegisterPage} />
                    <Redirect to="/auth/login" />
                </Switch>
            </Grid>
        </Grid>
    );
};

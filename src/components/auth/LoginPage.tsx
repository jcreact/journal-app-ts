import { FormEvent, useMemo, useRef, useEffect, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Alert,
    Button,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    FormControl,
    Grid,
    Grow,
    Snackbar,
    TextField,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { loginMailPassword, loginWithGoogle } from '../../actions/auth';

import { PasswordField } from './PasswordField';
import { useForm } from '../../hooks/useForm';
import { AppState } from '../../store/store';
import { clearErrorAction } from '../../actions/ui';

interface LoginForm {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, errMessage } = useSelector((state: AppState) => state.ui);
    const emailRef = useRef<HTMLInputElement>();
    const passRef = useRef<HTMLInputElement>();

    const { values, handleInputChange, checkMail, touched, toucheMe } = useForm<LoginForm>({
        email: 'palma@correo.com',
        password: '123456',
    });

    const { email, password } = values;

    const handleGoogleLogin = () => {
        dispatch(loginWithGoogle());
    };

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        dispatch(loginMailPassword(email, password));
    };

    const isNotValidMail = useMemo(
        () => touched.email && (email.length <= 0 || !checkMail(email)),
        [email, touched.email, checkMail]
    );

    const isNotValidPassword = useMemo(
        () => touched.password && password.length <= 0,
        [password, touched.password]
    );

    useEffect(() => {
        if (isNotValidMail && emailRef.current) {
            return emailRef.current.focus();
        } else if (isNotValidPassword && passRef.current) {
            return passRef.current.focus();
        }
    }, [isNotValidMail, isNotValidPassword]);

    useEffect(() => {
        errMessage && emailRef.current?.focus();
        setTimeout(() => errMessage && dispatch(clearErrorAction()), 2000);
    }, [errMessage, dispatch]);

    const handleClose = (ev?: SyntheticEvent, reason?: string) => {
        errMessage && dispatch(clearErrorAction());
    };

    return (
        <Card sx={{ border: 1, borderColor: 'divider' }}>
            <CardHeader title="Inicio de Sesión" sx={{ textAlign: 'center' }} />
            <form onSubmit={handleSubmit} onInvalid={toucheMe}>
                <CardContent>
                    <FormControl fullWidth>
                        <TextField
                            inputRef={emailRef}
                            type="text"
                            name="email"
                            label="Correo"
                            placeholder="correo@mail.com"
                            autoComplete="off"
                            required
                            autoFocus
                            value={email}
                            onChange={handleInputChange}
                            error={isNotValidMail}
                            helperText={isNotValidMail && 'El correo es requerido.'}
                            disabled={loading}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField
                            inputRef={passRef}
                            name="password"
                            required
                            value={password}
                            onChange={handleInputChange}
                            error={isNotValidPassword}
                            helperText={isNotValidPassword && 'La contraseña es requerida.'}
                            disabled={loading}
                        />
                    </FormControl>
                </CardContent>
                <Grid container sx={{ px: 2, mb: 2 }} spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            startIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
                            disabled={loading}
                        >
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            startIcon={<GoogleIcon />}
                            onClick={handleGoogleLogin}
                            disabled={loading}
                        >
                            Google
                        </Button>
                    </Grid>

                    <Grid item xs={12} justifyContent="center">
                        <Button
                            component={Link}
                            color="inherit"
                            fullWidth
                            disabled={loading}
                            endIcon={<AppRegistrationIcon />}
                            to="/auth/register"
                        >
                            ¡Registrate!
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar open={errMessage ? true : false} TransitionComponent={Grow}>
                <Alert severity="error" variant="outlined" onClose={handleClose}>
                    {errMessage}
                </Alert>
            </Snackbar>
        </Card>
    );
};

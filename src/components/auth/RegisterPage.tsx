import { FormEvent, useMemo, useEffect, useRef, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    CardContent,
    CardHeader,
    FormControl,
    TextField,
    Grid,
    Button,
    CircularProgress,
    Snackbar,
    Alert,
    Grow,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { AppState } from '../../store/store';
import { setErrorAction, clearErrorAction } from '../../actions/ui';
import { registerWithEmailAndPassword } from '../../actions/auth';

import { PasswordField } from './PasswordField';
import { useForm } from '../../hooks/useForm';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password2: string;
}

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { loading, errMessage } = useSelector((state: AppState) => state.ui);
    const [showAlertError, setShowAlertError] = useState(false);
    const emailRef = useRef<HTMLInputElement>();

    const { values, handleInputChange, touched, toucheMe, touchedAll, checkMail } =
        useForm<RegisterForm>({
            name: 'José Palma',
            email: 'palma@correo.com',
            password: '123456',
            password2: '123456',
        });

    const { name, email, password, password2 } = values;

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (isNotValidName || isNotValidMail || isNotValidPassword || isNotValidPassword2) {
            return;
        }
        dispatch(clearErrorAction());
        dispatch(registerWithEmailAndPassword(name, email, password));
    };

    const isNotValidName = useMemo<boolean>(
        () => touched.name && name.length <= 0,
        [name, touched.name]
    );

    const isNotValidMail = useMemo<boolean>(
        () => touched.email && (email.length <= 0 || !checkMail(email)),
        [email, touched.email, checkMail]
    );

    const isNotValidPassword = useMemo<boolean>(
        () =>
            touched.password &&
            (password.length < 5 || (password !== password2 && touched.password2)),
        [password, touched.password, password2, touched.password2]
    );

    const isNotValidPassword2 = useMemo<boolean>(
        () => touched.password2 && (password2.length < 5 || password !== password2),
        [password2, touched.password2, password]
    );

    useEffect(() => {
        isNotValidName && dispatch(setErrorAction('El nombre es requerido.'));
    }, [isNotValidName, dispatch]);

    useEffect(() => {
        isNotValidMail && dispatch(setErrorAction('El correo es requerido.'));
    }, [isNotValidMail, dispatch]);

    useEffect(() => {
        isNotValidPassword &&
            dispatch(setErrorAction('Las contraseñas debe ser más de 6 letras o no coinciden'));
    }, [isNotValidPassword, dispatch]);

    useEffect(() => {
        isNotValidPassword2 && dispatch(setErrorAction('Las contraseñas no coinciden'));
    }, [isNotValidPassword2, dispatch]);

    useEffect(() => {
        if (errMessage === '¡El correo ya está registrado!') {
            setShowAlertError(true);
            setTimeout(() => emailRef.current?.focus(), 100);
        }
    }, [errMessage, setShowAlertError, dispatch]);

    const handleClose = (ev?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlertError(false);
    };

    return (
        <Card sx={{ border: 1, borderColor: 'divider' }}>
            <CardHeader title="Registro de Cuenta" sx={{ textAlign: 'center' }} />
            <form onSubmitCapture={touchedAll} onSubmit={handleSubmit} onInvalid={toucheMe}>
                <CardContent>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            name="name"
                            label="Nombre"
                            placeholder="Nombre Apellido"
                            autoComplete="none"
                            required
                            autoFocus
                            autoCapitalize="words"
                            value={name}
                            onChange={handleInputChange}
                            error={isNotValidName}
                            helperText={isNotValidName && 'Nombre es requerido.'}
                            disabled={loading}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <TextField
                            inputRef={emailRef}
                            type="text"
                            name="email"
                            label="Correo"
                            placeholder="correo@mail.com"
                            autoComplete="none"
                            required
                            value={email}
                            onChange={handleInputChange}
                            error={isNotValidMail}
                            helperText={isNotValidMail && 'Correo es requerido.'}
                            disabled={loading}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField
                            name="password"
                            label="Contraseña"
                            required
                            value={password}
                            onChange={handleInputChange}
                            error={isNotValidPassword}
                            helperText={isNotValidPassword && 'Las contraseñas no coinciden'}
                            disabled={loading}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField
                            name="password2"
                            label="Confirmar Contraseña"
                            required
                            value={password2}
                            onChange={handleInputChange}
                            error={isNotValidPassword2}
                            helperText={isNotValidPassword2 && 'Las contraseñas no coinciden'}
                            disabled={loading}
                        />
                    </FormControl>
                </CardContent>
                <Grid container px={2} mb={2} spacing={2}>
                    <Grid item xs={12} sm={6} />
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            endIcon={
                                loading ? <CircularProgress size={20} /> : <AppRegistrationIcon />
                            }
                            disabled={loading}
                        >
                            Registrar
                        </Button>
                    </Grid>
                    <Grid item xs={12} justifyContent="center">
                        <Button
                            component={Link}
                            color="inherit"
                            fullWidth
                            startIcon={<LoginIcon />}
                            to="/auth/login"
                            disabled={loading}
                        >
                            ¡Inicia Sesión!
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                open={showAlertError}
                TransitionComponent={Grow}
                autoHideDuration={2500}
                onClose={handleClose}
            >
                <Alert severity="error" variant="outlined" onClose={handleClose}>
                    {errMessage}
                </Alert>
            </Snackbar>
        </Card>
    );
};

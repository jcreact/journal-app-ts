import { ChangeEvent, useState, FormEvent } from 'react';

export const useForm = <FormType>(initialState: FormType) => {
    const [values, setValues] = useState(initialState);
    const [touched, setTouched] = useState(
        Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: false }), {} as any)
    );

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });

        setTouched({
            ...touched,
            [target.name]: true,
        });
    };

    const touchedAll = () =>
        setTouched(Object.keys(touched).reduce((acc, key) => ({ ...acc, [key]: true }), {} as any));

    const toucheMe = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const { name } = ev.target as HTMLInputElement | HTMLTextAreaElement;
        setTouched({ ...touched, [name]: true });
    };

    const checkMail = (email: string): boolean => {
        return /^[A-Za-z0-9ñÑ._]+@[a-z0-9.-]{2,}\.[a-z]{2,}$/.test(email);
    };

    return {
        values,
        handleInputChange,
        reset,
        touched,
        touchedAll,
        toucheMe,
        checkMail,
    };
};

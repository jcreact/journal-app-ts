import { ChangeEvent, useState } from 'react';

export const useForm = <FormType>(initialState: FormType) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return {
        values,
        handleInputChange,
        reset,
    };
};

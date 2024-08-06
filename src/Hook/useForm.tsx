import React from 'react';
import {useForm} from 'react-hook-form';

interface FormField {
    name: string;
    value: string;
}

// Definimos una interfaz para el estado del formulario
interface LoginFormState extends Record<string, string> {
    name?: string;
    email?: string;
    password?: string;
}

export const useForm = (initialForm: LoginFormState = {}) => {
    const [formState, setFormState] = useState<LoginFormState>(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (value.trim() !== '' && ['email', 'password'].includes(name)) {
            setFormState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const onResetForm = () => {
        setFormState({}); // Reseteamos el formulario a un estado vacío
    };

    return {
        ...formState,
        onInputChange,
        onResetForm,
    };
};

import { useState } from 'react';

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (callback) => (event) => {
        event.preventDefault();
        if (callback) callback();
    };

    return {
        values,
        setValues,
        errors,
        handleChange,
        handleSubmit
    };
}

export default useForm;

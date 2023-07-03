/* eslint-disable react/prop-types */
import { FormControl, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

const TextFields = ({ label, inputProps, name }) => {
    const { formState: { errors }, control } = useFormContext();
    const inputErrors = (error) => !!error;

    return (
        <FormControl
            variant="outlined"
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={label}
                        size="small"
                        variant="outlined"
                        error={inputErrors(errors[name])}
                        inputProps={inputProps} />
                )} />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </FormControl>
    );
};

export default TextFields;

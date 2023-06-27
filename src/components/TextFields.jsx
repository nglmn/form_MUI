/* eslint-disable react/prop-types */
import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { ErrorMessage } from './ErrorMessage';


const TextFields = ({ label, inputProps, control, name, marginRight, errors }) => {

    const inputErrors = (error) => error ? { error: true } : { error: false }

    return (
        <FormControl sx={{ mt: 2, width: '100%', mr: { marginRight } }} variant="outlined">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={label}
                        // required
                        size='small'
                        variant="outlined"
                        {...inputErrors(errors[name])}
                        inputProps={inputProps} />
                )} />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </FormControl>
    )
}

export default TextFields;

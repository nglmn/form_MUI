import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";


// eslint-disable-next-line react/prop-types
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
                        size='small'
                        variant="outlined"
                        {...inputErrors(errors[name])}
                        inputProps={inputProps} />
                )} />
        </FormControl>
    )
}

export default TextFields;
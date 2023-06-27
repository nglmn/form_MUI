/* eslint-disable react/prop-types */
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

const CheckboxField = ({ name, control, errors }) => {

    const terms = 'Да я понимаю и соглашаюсь с Условиями обслуживания ReceptionStudio, включая пользовательское соглашение и Политику конфиденциальности';
    const inputErrors = (error) => error ? { error: true } : { error: false }

    return (
        <FormControl sx={{ color: 'black', textAlign: 'left', mt: 2, fontWeight: 'regular' }}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControlLabel
                        control={<Checkbox {...field} />}
                        errors={errors}
                        // required
                        label={terms}
                        {...inputErrors(errors[name])}
                    />
                )}
            />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </FormControl>
    )
}

export default CheckboxField;
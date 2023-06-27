/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FormControl, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";


const AutocompleteForms = ({ name, label, control, errors }) => {

    const [listCountry, setListCountry] = useState([]);

    const countryName = listCountry.map(item => item.country).sort();

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/')
            .then(res => res.json())
            .then(res => setListCountry(res.data))
    }, []);

    const inputErrors = (error) => error ? { error: true } : { error: false }

    return (
        <FormControl sx={{ width: '100%', mt: 2, textAlign: 'left' }}>
            <Controller
                name={name}
                control={control}
                size='small'
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={label}
                        size="small"
                        // required
                        {...inputErrors(errors[name])}
                        select variant="outlined">
                        <MenuItem value=''>None</MenuItem>
                        {countryName.map(country => (
                            <MenuItem key={Math.random()} value={country}>{country}</MenuItem>
                        ))}
                    </TextField>
                )}
            />
            {errors[name] ? <ErrorMessage messge={errors[name].message} /> : null}
        </FormControl>
    )
}

export default AutocompleteForms;
import { useState, useEffect } from "react";
import { FormControl, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";


// eslint-disable-next-line react/prop-types
const AutocompleteForms = ({ name, label, control }) => {

    const [listCountry, setListCountry] = useState([]);

    const countryName = listCountry.map(item => item.country).sort();
    console.log(countryName)
    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then(res => res.json())
            .then(res => setListCountry(res.data))
    }, []);
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
                        required
                        select variant="outlined">
                        <MenuItem value=''>None</MenuItem>
                        {countryName.map(country => (
                            <MenuItem key={country} value={country}>{country}</MenuItem>
                        ))}
                    </TextField>
                )}
            />
        </FormControl>
    )
}

export default AutocompleteForms;
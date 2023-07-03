/* eslint-disable react/prop-types */
import { FormControl, MenuItem, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

const AutocompleteInput = ({ name, label, choices, disabled = false }) => {
	const { formState: { errors }, control } = useFormContext();
	const inputErrors = (error) => !!error;

	return (
		<FormControl
			sx={{
				textAlign: 'left'
			}}>
			<Controller
				name={name}
				control={control}
				size="small"
				render={({ field }) => (
					// <Autocomplete
					// 	value={
					// 		value ? choice.find()	
					// 	}
					// />
					// const {onChange, value} = field;

					<TextField
						{...field}
						label={label}
						size="small"
						disabled={disabled}
						error={inputErrors(errors[name])}
						select
						variant="outlined"
					>
						<MenuItem value="">None</MenuItem>
						{choices.map(choice => (
							<MenuItem
								key={Math.random()}
								value={choice.label}
							>
								{choice.label}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</FormControl>
	);
};

export default AutocompleteInput;
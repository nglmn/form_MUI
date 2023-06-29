/* eslint-disable react/prop-types */
import {Checkbox, FormControl, FormControlLabel} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {ErrorMessage} from './ErrorMessage';

const CheckboxField = ({name}) => {
	const {formState: {errors}, control} = useFormContext();
	const terms = 'Да я понимаю и соглашаюсь с Условиями обслуживания ReceptionStudio, включая пользовательское соглашение и Политику конфиденциальности';
	const inputErrors = (error) => error ? 'true' : 'false';

	return (
		<FormControl>
			<Controller
				name={name}
				control={control}
				render={({field}) => (
					<FormControlLabel
						control={<Checkbox {...field} />}
						errors={errors}
						// required
						label={terms}
						error={inputErrors(errors[name])}
						sx={{textAlign: 'left'}}
					/>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</FormControl>
	);
};

export default CheckboxField;
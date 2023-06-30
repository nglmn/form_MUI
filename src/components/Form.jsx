import { Box, Typography, Button, Divider, Link } from '@mui/material';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import TextFields from './TextFields';
import AutocompleteForms from './AutocompleteForms';
import CheckboxField from './TermsField';
import GoogleIcon from '@mui/icons-material/Google';

const schema = yup
    .object({
        Name: yup.string().min(2, 'Too Short!').required('Name is required'),
        LastName: yup.string().required('Last name is required'),
        Password: yup.string().required('Password is required'),
        Email: yup.string().email('Invalid email').required('Mail is required'),
        Country: yup.string().required('Country is required'),
        City: yup.string().required('City is required'),
        Terms: yup.bool().oneOf([true], 'Field must be checked'),
    });

export default function RegisterForm() {
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            Name: "",
            LastName: "",
            Password: "",
            Email: "",
            Country: "",
            City: "",
            Terms: false,
        },
        resolver: yupResolver(schema)
    });
    // console.log(errors)

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'block', width: 400, borderRadius: '6px', boxShadow: 1, p: 4 }}  >
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'light', color: 'black', textAlign: 'left' }}>
                    Зарегистрируйтесь что би найти работу по душе
                </Typography>;
                <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ width: '100%', mt: 1 }}>Continue with Google
                </Button>

                <Divider sx={{ mt: 3, color: 'black' }}>or</Divider>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextFields name={'Name'} errors={errors} label={'First Name'} control={control} marginRight={16} />
                    <TextFields name={'LastName'} errors={errors} label={'Last Name'} control={control} />
                </Box>
                <TextFields name={'Email'} label={'Email'} errors={errors} control={control} sx={{ mt: 2, width: '100%' }} />
                <TextFields name={'Password'} errors={errors} label={'Password'} control={control} />

                <AutocompleteForms name={'Country'} errors={errors} label={'Country'} control={control} />
                <AutocompleteForms name={'City'} errors={errors} label={'City'} control={control} />

                <CheckboxField name={'Terms'} label={'Terms'} control={control} errors={errors} />

                <Button
                    type='submit'
                    variant='contained'
                    sx={{ width: '100%', mt: 2 }}>Log in
                </Button>

                <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                    <Typography
                        variant='subtitle1'
                        component="h2"
                        sx={{ fontWeight: 'light', color: 'rgba(1,1,1,0.4)', textAlign: 'left', mr: 1 }}>
                        Already have an account
                    </Typography>;
                    <Link href="#">Log in</Link>
                </Box>
            </Box>
        </form >
    );
}

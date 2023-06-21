import { Box, Typography, Button, Divider, FormControlLabel, FormControl, Checkbox, Link } from '@mui/material';
// import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import TextFields from './TextFields';
import AutocompleteForms from './AutocompleteForms';
import GoogleIcon from '@mui/icons-material/Google';


// const schema = yup
//     .object({
//         Name: yup.string().min(2, 'Too Short!').required('Name is required'),
//         LastName: yup.string().required('Name is required'),
//         Password: yup.string().required('Password is required'),
//         Email: yup.string().email('Invalid email').required('Name is required'),
//         Country: "",
//         City: "",
//         Terms: yup.bool(),
//     });

export default function RegisterForm() {
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            Name: "",
            LastName: "",
            Password: "",
            Email: "",
            Country: "",
            City: "",
            Terms: false,
        },
        // resolver: yupResolver(schema)
    });

    const onSubmit = ({ data }) => {
        console.log(data);
        reset();
    }

    const terms = 'Да я понимаю и соглашаюсь с Условиями обслуживания ReceptionStudio, включая пользовательское соглашение и Политику конфиденциальности';

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'block', width: 400, height: 650, borderRadius: '6px', boxShadow: 1, p: 4 }} >
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
                    <TextFields name={'FirstName'} label={'First Name'} control={control} marginRight={16} />
                    <TextFields name={'LastName'} label={'Last Name'} control={control} />
                </Box>
                <TextFields label={'Email'} name={'email'} control={control} sx={{ mt: 2, width: '100%' }} />
                <TextFields name={'password'} label={'Password'} control={control} />

                <AutocompleteForms name={'Country'} label={'Country'} control={control} />
                <AutocompleteForms name={'City'} label={'City'} control={control} />

                <FormControl>
                    <Controller
                        name='Terms'
                        control={control}
                        render={({ fields }) => (
                            <FormControlLabel
                                control={<Checkbox {...fields} required />}
                                sx={{ color: 'black', textAlign: 'left', mt: 2, fontWeight: 'regular' }}
                                label={terms} />
                        )}
                    />
                </FormControl>

                <Button
                    type='submit'
                    variant='contained'
                    sx={{ width: '100%', mt: 2, backgroundColor: "#3048c0" }}>Log in
                </Button>

                <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }} onSubmit={handleSubmit(onSubmit)}>
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

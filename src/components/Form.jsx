import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormProvider, useForm, useFormContext, useWatch} from 'react-hook-form';

import TextFields from './TextFields';
import AutocompleteInput from './AutocompleteInput';
import CheckboxField from './TermsField';
import GoogleIcon from '@mui/icons-material/Google';
import {useGetCountry} from './useGetCountry';
import {useMemo} from 'react';

const schema = yup.object({
  Name: yup.string().min(2, 'Too Short!').required('Name is required'),
  LastName: yup.string().required('Last name is required'),
  Password: yup.string().required('Password is required'),
  Email: yup.string().email('Invalid email').required('Mail is required'),
  Country: yup.string().required('Country is required'),
  City: yup.string().required('City is required'),
  Terms: yup.bool().oneOf([true], 'Field must be checked'),
});

export default function RegisterForm() {
  const methods = useForm({
    defaultValues: {
      Name: '',
      LastName: '',
      Password: '',
      Email: '',
      Country: '',
      City: '',
      Terms: false,
    },
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
}

const Form = () => {
  const {countries, isLoading} = useGetCountry();
  const {
    reset,
    handleSubmit,
    control,
  } = useFormContext();
  const country = useWatch({
    control,
    name: 'Country',
  });

  const cities = useMemo(() => {
    if (country === '') {
      return [];
    }

    return countries.find((el) => el.label === country).
      value.
      cities.
      map((city) => ({label: city, value: city}));
  }, [country, countries]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: 400,
        }}
      >
        <Card>
          <CardHeader
            title={(
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 'light',
                  color: 'black',
                  textAlign: 'left',
                }}
              >
                Зарегистрируйтесь что би найти работу по душе
              </Typography>
            )}
          />
          <CardContent>
            <Stack spacing={2}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
              >
                Continue with Google
              </Button>

              <Divider sx={{mt: 3, color: 'black'}}>or</Divider>

              <Stack direction="row" spacing={2}>
                <TextFields
                  name={'Name'}
                  label={'First Name'}
                  marginRight={16}
                />
                <TextFields
                  name={'LastName'}
                  label={'Last Name'}
                />
              </Stack>
              <TextFields
                name={'Email'}
                label={'Email'}
              />
              <TextFields
                name={'Password'}
                label={'Password'}
              />

              <AutocompleteInput
                name={'Country'}
                label={'Country'}
                choices={isLoading ? [] : countries}
              />
              <AutocompleteInput
                name="City"
                label="City"
                choices={cities}
                disabled={country === ''}
              />

              <CheckboxField
                name={'Terms'}
                label={'Terms'}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Log in
              </Button>

             <Stack direction="row" alignItems="center" justifyContent="center">
               <Typography
                 variant="subtitle1"
                 component="h2"
                 sx={{
                   fontWeight: 'light',
                   color: 'rgba(1,1,1,0.4)',
                   textAlign: 'left',
                   mr: 1,
                 }}
               >
                 Already have an account
               </Typography>
               <Link href="#">Log in</Link>
             </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
};

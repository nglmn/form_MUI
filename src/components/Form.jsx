import { Box, Typography, Button, Divider, TextField, Autocomplete, FormControlLabel, Checkbox, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';



export default function Form() {
    const terms = 'Да я понимаю и соглашаюсь с Условиями обслуживания ReceptionStudio, включая пользовательское соглашение и Политику конфиденциальности'
    return (
        <Box sx={{ display: 'block', width: 400, height: 650, borderRadius: '6px', boxShadow: 1, p: 4 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'light', color: 'black', textAlign: 'left' }}>
                Зарегистрируйтесь что би найти работу по душе
            </Typography>;
            <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ width: '100%', mt: 1 }}>Continue with Google</Button>
            <Divider sx={{ mt: 3, color: 'black' }}>or</Divider>
            <Box classNames='name_inputs' sx={{ display: 'flex', }}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{ mr: 3, mt: 2 }} size='small' />
                <TextField id="outlined-basic" label="Last Name"
                    variant="outlined" sx={{ mt: 2 }} size='small' />
            </Box>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ mt: 2, width: '100%' }} size='small' />
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ mt: 1, width: '100%' }} size='small' />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                // options={}
                sx={{ width: '100%', mt: 2 }}
                size='small'
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                // options={}
                sx={{ width: '100%', mt: 1 }}
                size='small'
                renderInput={(params) => <TextField {...params} label="City" />}
            />
            <FormControlLabel control={<Checkbox />} label={terms} sx={{ color: 'black', textAlign: 'left', mt: 2, fontWeight: 'regular' }} />
            <Button variant='contained' sx={{ width: '100%', mt: 2, backgroundColor: "#3048c0" }}>Log in</Button>
            <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
                <Typography variant='subtitle1' component="h2" sx={{ fontWeight: 'light', color: 'rgba(1,1,1,0.4)', textAlign: 'left', mr: 1 }}>
                    Already have an account
                </Typography>;
                <Link href="#">Log in</Link>
            </Box>
        </Box>
    );
}

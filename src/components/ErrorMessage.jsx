import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// eslint-disable-next-line react/prop-types
export const ErrorMessage = ({ message }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', margin: '3px' }}>
            <ErrorOutlineIcon sx={{ color: 'error.main', width: '15px' }} />
            <Typography sx={{ color: 'error.main', marginLeft: '5px' }}>
                {message}
            </Typography>
        </Box>
    )
}

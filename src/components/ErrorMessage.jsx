import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// eslint-disable-next-line react/prop-types
export const ErrorMessage = ({ message }) => {
    return (
        <Box sx={{ display: 'flex', textAlign: 'left' }}>
            <ErrorOutlineIcon sx={{ color: 'error.main', width: '15px', marginRight: '5px' }} />
            <Typography sx={{ color: 'error.main', variant: 'span', fontSize: '14px' }}>
                {message}
            </Typography>
        </Box>
    )
}

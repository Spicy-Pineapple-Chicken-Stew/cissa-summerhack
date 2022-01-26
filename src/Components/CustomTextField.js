import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";

export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#5178b2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#5178b2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#5178b2',
        },
        '&:hover fieldset': {
            borderColor: '#5178b2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#5178b2',
        },
    },
});


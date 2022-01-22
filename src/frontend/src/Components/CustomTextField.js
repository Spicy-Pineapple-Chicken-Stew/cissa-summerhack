import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";

export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#489fb5',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#489fb5',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#489fb5',
        },
        '&:hover fieldset': {
            borderColor: '#489fb5',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#489fb5',
        },
    },
});

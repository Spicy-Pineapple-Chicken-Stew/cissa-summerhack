import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
/*
function PhoneButton() {
  return (
      <Button
        variant="contained"
        color="secondary"
        startIcon={
          <Avatar
            src={
              "http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png"
            }
          />
        }
      >
        testing
      </Button>
  );
}
*/
/*
function PhoneButton(){
  return(
    <ColorButton variant="outlined" startIcon={<Avatar
      src={
      "http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png"
      }
  />}> Delete </ColorButton>
  );
};

*/

const UploadP_Button = styled(Button)(({ theme }) => ({
  fontFamily: [
      'Oxygen',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  color: '#FFFFFF',
  backgroundColor: '#489fb5',
  padding: '6px 12px',
  border: '#59a9bd',
  fontSize: 16,
  height: (window.innerHeight)/8,
  width: window.innerWidth - 0.12*window.innerWidth,
  marginBottom: 10,
  '&:hover': {
      backgroundColor: '#59a9bd',
  },
  '&:active': {
      backgroundColor:'#4896b5',
  },
}));


export default function PhoneButton(props){
  return(
    <div>
    <UploadP_Button
          variant= 'outlined'
          style={{width: 'calc((100% - 3vw))',
                  height: 'calc((100% - 2vw))'}}
          onClick={props.OnClick}
    >
    <div style = {{flexWrap: 'wrap', display:'flex', flexDirection:'column', alignItems: 'center'}}>
      <Box component="div" sx={{ display: 'block', alignItems: 'center',marginTop: -3 }}>

      <h3>{props.text}</h3>

      <LibraryBooksIcon style={{ color: '#ede7e3'}}/>

      </Box>
      <Box component="div" sx={{ display: 'block', marginTop: -1.5 }}>Tap box to enter content to be summarised</Box>
    </div>
    </UploadP_Button>
    </div>

  );
};


//Correct!



/*

export default function PhoneButton(props){
  return(
    <div>
    <UploadP_Button
          variant= 'outlined'
          style={{ width: 'calc((100% - 5vw))' }}
    >
    <div>
      <div style ={{flexWrap: 'wrap', display:'flex', flexDirection:'row', alignItems: 'center'}}>

      <h3>{props.text}</h3>

      <LibraryBooksIcon style={{ color: '#ede7e3'}}/>

      </div>

    <p style = {{marginTop: -10, marginLeft: -10, alignItems: 'center'}}>{props.desc}</p>

    </div>
    </UploadP_Button>
    </div>

  );
};

*/





/*
export default function PhoneButton(props){
  return(
    <div>
    <UploadP_Button
          variant= 'outlined'
          style={{ width: 'calc((100% - 5vw))' }}
    >
    <div>
      <div style ={{flexWrap: 'wrap', display:'flex', flexDirection:'row', alignItems: 'center'}}>

      <h3>{props.text}</h3>

      <LibraryBooksIcon style={{ color: '#ede7e3', justifyContent: 'right', flex: '10'}}/>

      </div>

    <p style = {{marginTop: -10}}>get a life </p>

    </div>
    </UploadP_Button>
    </div>

  );
};


*/

/*
<Button
    variant="contained"
    color = "#59a9bd"
    startIcon={
      <Avatar
        src={
          "http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png"
        }
      />
    }
  >
    testing
  </Button>


  export default function PhoneButton(props){
  return(
    <div>
    <UploadP_Button
          variant= 'outlined'
          endIcon={<LibraryBooksIcon style={{ color: '#ede7e3'}}/>}
          style={{ width: 'calc((100% - 5vw))' }}
    >
    {props.text}
    </UploadP_Button>
    </div>

  );
};



*/

/*

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */

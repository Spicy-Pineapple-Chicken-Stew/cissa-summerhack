import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

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

function PhoneButton(){
  return(
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
  );
};

export default PhoneButton;

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



*/

/*

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */
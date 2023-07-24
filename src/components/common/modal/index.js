import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material';
import supabase from '../../../supabase/supabaseClient'; // Import the initialized Supabase client


import CustomTextField from '../../forms/theme-elements/CustomTextField';
import { Typography } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  borderRadius: '2px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function NestedModal({ openModal, setModal }) {

  var [email, setEmail] = useState("")

  let theme = useTheme()
  const handleClose = () => {
    console.log('modal2', openModal);
    setModal(false);
  };

  
  const handleInputEmail = (e)=>{
    setEmail(e.target.value)
  }


    async function signInWithEmail() {
    console.log("you clicked on email login")
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'https://www.google.com',
      },
    })

    console.log("this is data ", data)
  }



  return (
    <div>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={{ ...style, width: 400 }}>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="Email"
              mb="5px"
            >
              Email
            </Typography>

            <CustomTextField variant="outlined" fullWidth  onChange={handleInputEmail}/>

            <Button
              onClick={signInWithEmail}
              sx={{
                display: 'block',
                marginLeft: 'auto',
                marginTop: '10px',
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                fontWeight: 'bold',
                transition : "0.5s",
                '&:hover': {
                  background: theme.palette.primary.dark,
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
                },
              }}
            >
              Submit
            </Button>
          </Box> 
          {/* <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="Email"
              mb="5px"
            >
              Email
            </Typography>
            <CustomTextField variant="outlined" fullWidth />

            <Button
              sx={{
                display: 'block',
                marginLeft: 'auto',
                marginTop: '10px',
                backgroundColor: '#4570EA',
                color: 'white',
                fontWeight: 'bold',
                transition : "0.5s",
                '&:hover': {
                  background: '#4570EA',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
                },
              }}
            >
              Submit
            </Button>
          </Box> */}
        </Box>
      </Modal>
    </div>
  );
}

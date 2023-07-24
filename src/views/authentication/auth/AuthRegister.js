import { React, useState } from 'react';
import supabase from '../../../supabase/supabaseClient';
import { Box, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

import Swal from 'sweetalert2';

import CircularProgress from '@mui/material/CircularProgress';

const AuthRegister = ({ title, subtitle, subtext }) => {
  var [value, setValue] = useState('');

  const [loader,setLoader] = useState(false)

//   handle change input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



//   handle signup
  const handleSignup = async () => {
    try {
    
      setLoader(true)


      console.log('values  ', value);
      // console.log("supabase ", supabase)
      const { data, error } = await supabase.auth.signUp({
        email: value.email,
        password: value.password,
        options: {
          data: {
            first_name: value.name,
          },
        },
      });
        
    
      if(data.user != null){
            console.log("data", data)
            Swal.fire({
                title: 'Success',
                text: 'Kindly varify your email address',
                icon: 'success',
                confirmButtonText: 'OK',
            });

      }else{

            console.log("error ", error);
                Swal.fire({
                title: 'failed',
                text: 'Something went wrong, try later',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        
      }
      
      setLoader(false)
    } catch (err) {
      console.log('err ', err);
      setLoader(false)
      
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Box>
        <Stack mb={3}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="name"
            mb="5px"
          >
            Name
          </Typography>
          <CustomTextField
            id="name"
            variant="outlined"
            fullWidth
            name="name"
            onChange={handleChange}
          />

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="email"
            mb="5px"
            mt="25px"
          >
            Email
          </Typography>
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            name="email"
            onChange={handleChange}
          />

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
            mt="25px"
          >
            Password
          </Typography>
          <CustomTextField
            id="password"
            variant="outlined"
            name="password"
            fullWidth
            onChange={handleChange}
          />
        </Stack>
        {/* <Button color="primary" variant="contained" size="large" fullWidth component={Link} to="/auth/login"  */}
        <Button color="primary" variant="contained" size="large" fullWidth onClick={handleSignup}>
            Sign Up
            {
                loader ? <CircularProgress color="inherit" size="20px" sx={{marginLeft : "10px"}}/> : ""
            }
            
         
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;

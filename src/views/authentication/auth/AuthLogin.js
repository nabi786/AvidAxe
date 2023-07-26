import { React, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import GoogleLogin from '../../../components/auth/loginWithGoogle/index';
import LoginWithEmail from '../../../components/auth/EmailLogin/index';
import supabase from '../../../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../Store/slices/userSlice';



const AuthLogin = ({ title, subtitle, subtext }) => {
  const dispetch = useDispatch();
  let navigate = useNavigate();
  

  var [value, setValue] = useState('');

  // handle change the value of input field
  const handleChange = (e) => {
    var { name, value } = e.target;
    console.log('this is handle change ');
    setValue((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  // handle submite the button
  const handleLogin = async () => {
    console.log('input data ', value);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: value.email,
      password: value.password,
    });

    if (data.session != null) {

      // console.log("data ", data.user)
      // dispetch user data
      // dispetch(addUser(data.user));

      // navigate to home page
      navigate('/');
    } else {
      console.log('error ', error);
      Swal.fire({
        title: 'failed',
        text: 'Invalid email or password',
        icon: 'error',
        confirmButtonText: 'OK',
      });
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

      <Stack>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="username"
            mb="5px"
          >
            Email
          </Typography>
          <CustomTextField
            id="username"
            name="email"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Box>
        <Box mt="25px">
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
          >
            Password
          </Typography>
          <CustomTextField
            id="password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Box>
        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remeber this Device" />
          </FormGroup>
          <Typography
            component={Link}
            to="/"
            fontWeight="500"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          sx={{ marginBottom: '20px' }}
          onClick={handleLogin}
        >
          Sign In
        </Button>

        {/* login with google */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <GoogleLogin />

          {/* loing with email */}
          {/* <LoginWithEmail/> */}
        </Box>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;

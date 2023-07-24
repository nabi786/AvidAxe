// GoogleLogin.js
import React from 'react';
import "./index.css"
import supabase from '../../../supabase/supabaseClient'; // Import the initialized Supabase client

import {Button, Box} from '@mui/material'
import { FaGoogle } from 'react-icons/fa';
import {useTheme} from '@mui/material'

const GoogleLogin = () => {
  let theme = useTheme();

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    
  };

  return (
    <Box className="google-btn" sx={{
      cursor : "pointer", 
      margin : "auto",
      backgroundColor : theme.palette.primary.main,
      "&:hover" : {
        backgroundColor : theme.palette.primary.dark,
      }
      }}  onClick={handleGoogleLogin}>
    <Box className="google-icon-wrapper">
      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </Box>
    <p className="btn-text"><b>Sign in with google</b></p>
  </Box>
  );
};


export default GoogleLogin;

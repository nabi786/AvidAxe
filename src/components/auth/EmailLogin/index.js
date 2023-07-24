// GoogleLogin.js
import React from 'react';
import { useState } from 'react';
import './index.css';

import { Button, Box } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import {useTheme} from '@mui/material'

import Modal from '../../common/modal/index';

// working with login with email
const LoginWithEmail = () => {
  let theme = useTheme()
  var [openModal, setModal] = useState(false);
  var [email, setEmail] = useState('');
  let form;
  function handleModal() {
    setModal(!openModal);
  }



  return (
    <>
      <Box
        className="google-btn"
        sx={{
          cursor: 'pointer',
          margin: 'auto',
          backgroundColor : theme.palette.primary.main,
          "&:hover" : {
            backgroundColor : theme.palette.primary.dark
          }
        }}
        onClick={handleModal}
      >
        <Box className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://res.cloudinary.com/learn2code/image/upload/v1690034922/Icons/gmail_u3skrf.png"
          />
        </Box>
        <p className="btn-text">
          <b>Sign in with Email</b>
        </p>
      </Box>
      <Modal openModal={openModal} setModal={setModal} />

      {/* <Modal openModal={openModal} setModal={setModal} form={true}/> */}
    </>
  );
};

export default LoginWithEmail;

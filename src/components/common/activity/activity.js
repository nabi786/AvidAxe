import React, { useEffect, useState } from 'react';

import { Card, Box, Button, Typography } from '@mui/material';
import {useTheme} from '@mui/material'
const ActivityCard = (prop) => {

    let theme = useTheme();
    console.log(theme);

  return (
    <>
      <Box>
        <Box sx={{display : "flex", justifyContent : "space-between", alignItems :"center", borderBottom : "1px solid lightgray"}}>
          <Typography>YOUR ACTIVITY</Typography>
          <Box>
            <Button>1 Month</Button>
            <Button>2 Month</Button>
            <Button>3 Month</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ActivityCard;

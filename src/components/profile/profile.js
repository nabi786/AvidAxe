import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useTheme } from '@mui/material';
import Link from '@mui/material/Link';
// importing icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

import Card from '@mui/material/Card';

import ActivityCard from '../common/activity/activity';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

const ProfileBox = () => {
  var theme = useTheme();

  console.log(theme);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={2}>
        {/* left side boxs */}
        <TabContext value={value}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ boxShadow: 3, padding: '10px' }}>
              <Box
                sx={{
                  display: 'flex',
                  margin: 'auto',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{ width: '100px', height: '100px' }}
                    alt="Remy Sharp"
                    src="https://modernize-react.adminmart.com/static/media/user-1.479b494978354b339dab.jpg"
                  />
                </Stack>
              </Box>
              <Box
                sx={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ fontWeight: 'bold' }}>
                  <Typography style={{ fontWeight: theme.typography.h6.fontWeight }}>
                    Nabi Baksh
                  </Typography>
                </Box>
                <Box>
                  <Typography>Developer</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button color="primary">Follow</Button>
                <Button>Message</Button>
              </Box>

              {/* tabls */}
              <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  orientation="vertical"
                >
                  <Tab label="overview" value="1" icon={<HomeOutlinedIcon />} />
                  <Tab label="Settings" value="2" icon={<SettingsOutlinedIcon />} />
                  <Tab label="API" value="3" icon={<HandymanOutlinedIcon />} />
                </TabList>
              </Box>
            </Card>

            {/* card item 2 */}
            <Card sx={{ marginTop: '20px', boxShadow: 3, padding: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #e6e6e6',
                  paddingBottom: '10px',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: theme.typography.h6,
                      textAlign: 'center',
                      marginBottom: '5px',
                    }}
                  >
                    59
                  </Typography>
                  <Typography sx={{ fontWeight: theme.typography.h6 }}>Projects</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: theme.typography.h6,
                      textAlign: 'center',
                      marginBottom: '5px',
                    }}
                  >
                    70
                  </Typography>
                  <Typography sx={{ fontWeight: theme.typography.h6 }}>Taks</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: theme.typography.h6,
                      textAlign: 'center',
                      marginBottom: '5px',
                    }}
                  >
                    98
                  </Typography>
                  <Typography sx={{ fontWeight: theme.typography.h6 }}>Uploads</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: '10px',
                }}
              >
                <Typography sx={{ fontWeight: theme.typography.h6 }}>About Nabi Baksh</Typography>
                <Typography sx={{ marginTop: '5px' }}>
                  Lorem impulush the is the aghte impuse tlogon ko tension dty ho pesa bhi to
                  tesnion ho ai na lo to tension na ho t tesnion
                </Typography>
                {/* social media */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Link to="/" sx={{ cursor: 'pointer', marginTop: '10px' }}>
                    <PublicOutlinedIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
                    www.google.com
                  </Link>
                  <Link to="/" sx={{ cursor: 'pointer', marginTop: '10px' }}>
                    <TwitterIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
                    www.facebook.com
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* right side Boxes */}
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Card sx={{ padding: '10px', boxShadow: 3 }}>
              {/* activity Card */}
              {/* <ActivityCard /> */}

              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              {/* item3 */}
              <TabPanel value="3">

                <Box>
                    <Typography>API Key</Typography>
                    <Typography>
                      b22d533b-1283-44db-8e20-27db304ce1f5
                    </Typography>
                    <Button>Generate</Button>
                </Box>
                
              </TabPanel>
            </Card>
          </Grid>
        </TabContext>
      </Grid>
    </>
  );
};

export default ProfileBox;

import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import ProfileBox from '../../components/profile/profile'

import {Box} from '@mui/material'

const profilePage = () => {


  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard>
        {/* profile Box */}
        <Box >
            <ProfileBox/>
        </Box>

      </DashboardCard>
    </PageContainer>
  );
};

export default profilePage;

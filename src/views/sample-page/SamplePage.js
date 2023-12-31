import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

import { useSelector } from 'react-redux';

const SamplePage = () => {

  const data = useSelector((state)=>{
    return state.users;
  })

  console.log("this is data ", data)
  
  console.log("this is working data")

  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

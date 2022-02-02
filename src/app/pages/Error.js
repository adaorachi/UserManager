import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { Button } from '../components';
import { PageContainer } from '../shared';

export default function Error() {
  return (
    <PageContainer>
      <Box p={3} textAlign="center">
        <Typography variant="h4">404! Page Not found!</Typography>
        <Box my={3}>
          <Button label="Back to Dashboard" component={Link} to="/dashboard" />
        </Box>
      </Box>
    </PageContainer>
  );
}

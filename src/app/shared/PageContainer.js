import React from 'react';
import { Container, Paper, Box, Typography } from '@mui/material';
import { NavBar, Footer } from './index';

export default function PageContainer({ children, pageTitle }) {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={3}>
          <Typography variant="h6">{pageTitle}</Typography>
        </Box>
        <Paper sx={{ width: '100%' }}>
          <Box p={1}>{children}</Box>
        </Paper>
        <Footer />
      </Container>
    </>
  );
}

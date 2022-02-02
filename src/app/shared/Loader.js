import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function Loader() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="success" size={50} />
    </Box>
  );
}

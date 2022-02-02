import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap>
            <MuiLink underline="none" component={Link} to="/" color="#fff">
              UserManager
            </MuiLink>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppNavBar;

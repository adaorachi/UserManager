import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { ThemeProvider } from '@mui/material';

import Navigation from './navigation';
import { fetchUsers } from './redux/actions';
import { Loader } from './shared';
import { theme } from './utils/theme';

import './App.css';
import 'react-notifications/lib/notifications.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ setIsLoading }));
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <NotificationContainer />
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;

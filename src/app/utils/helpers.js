import { Typography } from '@mui/material';
import { NotificationManager } from 'react-notifications';

export const notification = (type, message) => {
  const msg = <Typography variant="body2">{message}</Typography>;
  switch (type) {
    case 'info':
      NotificationManager.info(msg);
      break;
    case 'success':
      NotificationManager.success(msg);
      break;
    case 'warning':
      NotificationManager.warning(msg);
      break;
    case 'error':
      NotificationManager.error(msg);
      break;
  }
};

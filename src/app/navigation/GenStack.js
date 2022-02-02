import { Route } from 'react-router-dom';
import { Home, Dashboard, CreateUser, EditUser } from '../pages';

const GenStack = (
  <Route>
    {[
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/create-user', element: <CreateUser /> },
      { path: '/edit-user', element: <EditUser /> },
      { path: '/', element: <Home /> },
    ].map((r, ind) => (
      <Route key={ind} exact path={r.path} element={r.element} />
    ))}
  </Route>
);

export default GenStack;

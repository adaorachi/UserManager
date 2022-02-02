import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenStack from './GenStack';
import ScrollTop from '../shared/ScrollTop';

import { Error } from '../pages';

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollTop>
      <Routes>
        {GenStack}
        <Route path="*" element={<Error />} />
      </Routes>
    </ScrollTop>
  </BrowserRouter>
);

export default AppRoutes;

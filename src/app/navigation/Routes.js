import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenStack from './GenStack';
import ScrollTop from '../shared/ScrollTop';

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollTop>
      <>
        <Routes>
          {GenStack}
          <Route path="*" element={() => <div>404, Not Found!</div>} />
        </Routes>
      </>
    </ScrollTop>
  </BrowserRouter>
);

export default AppRoutes;

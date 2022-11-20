import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '@routes';

const ApplicationRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default ApplicationRoutes;

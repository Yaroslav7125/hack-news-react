import { Outlet } from 'react-router-dom';
import React from 'react';

export const Layout = () => {
  return (
    <>
      <h1>Hacker news</h1>

      <Outlet />
    </>
  );
};

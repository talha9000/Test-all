import React, { useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './fixroute/Main';
import Navbar from './component/Navbar';
import Drawer from './component/Drawer';
import PageLayout from './container/PageLayout';
import Loader from './component/Loader';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client instance
const queryClient = new QueryClient();

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar ButtonEvent={toggleDrawer} />
      <Drawer toggleDrawer={isDrawerOpen} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<PageLayout />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;

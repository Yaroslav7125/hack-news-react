/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Layout } from './components/Layout';

import { CurrentNews } from './pages/CurrentNews';
import { NewsList } from './pages/NewsList';

import { parsePathName } from './lib/utils';

function App() {
  const { pathname } = useLocation();

  const [newsPage, setNewsPage] = useState(parsePathName(pathname) || 1);
  const navigate = useNavigate();

  const setNextPage = () => {
    setNewsPage((currentPageNumber) => currentPageNumber + 1);
  };

  const setPrevPage = () => {
    if (newsPage === 1) return;
    setNewsPage((currentPageNumber) => currentPageNumber - 1);
  };

  useEffect(() => {
    navigate(/\/[0-9]*\/news\/[\d]*/gm.test(pathname) ? pathname : `/${newsPage}`);
  }, [newsPage]);

  return (
    <div className={'d-flex align-items-center flex-column'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/:id"
            element={
              <NewsList
                setNextPage={() => {
                  setNextPage();
                }}
                setPrevPage={() => {
                  setPrevPage();
                }}
              />
            }
          />
          <Route path="/:id/news/:id" element={<CurrentNews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

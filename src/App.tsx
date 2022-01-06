/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { fetchData } from './services/getNews';
import { NewsItem } from './components/NewsItem';

import { useDispatch, useSelector } from 'react-redux';
import { News } from './store';

function App() {
  const dispatch = useDispatch();
  const newsStore = useSelector((state) => state);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchData(pageNumber).then((result) => {
      dispatch({ type: 'SET_NEWS', payload: result.data });
    });
  }, [pageNumber]);

  const setNextPage = () => {
    setPageNumber((prevPageNumber: number) => {
      return prevPageNumber + 1;
    });
  };

  const setPrevPage = () => {
    if (pageNumber === 1) return;
    setPageNumber((prevPageNumber: number) => {
      return prevPageNumber - 1;
    });
  };

  // eslint-disable-next-line no-console
  console.log(newsStore);

  return (
    <div className={'d-flex align-items-center flex-column'}>
      <h1>Hacker news</h1>

      {(newsStore as News[]).map((theNews: News) => {
        return (
          <NewsItem
            title={theNews.title}
            id={theNews.id}
            key={theNews.id}
            points={theNews.points}
            time={theNews.time}
            user={theNews.user}
          />
        );
      })}

      <div>
        <button onClick={() => setNextPage()}>Next</button>
        <button onClick={() => setPrevPage()}>Prev</button>
        <h1>{pageNumber}</h1>
      </div>
    </div>
  );
}

export default App;

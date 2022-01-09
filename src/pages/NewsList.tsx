import { News } from '../store';
import { NewsItem } from '../components/NewsItem';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNews } from '../services/getNews';

export const NewsList: React.FC<{ setNextPage: () => void; setPrevPage: () => void }> = ({
  setNextPage,
  setPrevPage,
}) => {
  const dispatch = useDispatch();
  const newsStore = useSelector((state) => state);
  const { id: pageNumber } = useParams();

  useEffect(() => {
    fetchAllNews(pageNumber).then((result) => {
      dispatch({ type: 'SET_NEWS', payload: result.data });
    });
    // eslint-disable-next-line
  }, [pageNumber]);

  return (
    <>
      {(newsStore as News[]).map((theNews: News) => {
        return (
          <NavLink className={'active'} key={theNews.id} to={`news/${theNews.id}`}>
            <NewsItem
              title={theNews.title}
              id={theNews.id}
              key={theNews.id}
              points={theNews.points}
              time={theNews.time}
              user={theNews.user}
            />
          </NavLink>
        );
      })}
      <div>
        <button onClick={() => setNextPage()}>Next</button>
        <button onClick={() => setPrevPage()}>Prev</button>
        <h1>{pageNumber}</h1>
      </div>
    </>
  );
};

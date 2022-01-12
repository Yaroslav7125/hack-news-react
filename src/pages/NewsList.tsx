import { INews } from '../store';
import { NewsItem } from '../components/NewsItem';
import React, { useEffect } from 'react';
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

  const updateNewsList = () => {
    fetchAllNews(pageNumber).then((result) => {
      dispatch({ type: 'SET_NEWS', payload: result.data });
    });
  };

  useEffect(() => {
    updateNewsList();
    const intervalId = setInterval(() => updateNewsList(), 60000);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [pageNumber]);

  return (
    <>
      {(newsStore as INews[]).map((theNews: INews) => {
        return (
          <NavLink className={'active'} key={theNews.id} to={`news/${theNews.id}`}>
            <NewsItem
              title={theNews.title}
              id={theNews.id}
              key={theNews.id}
              points={theNews.points}
              time_ago={theNews.time_ago}
              user={theNews.user}
              url={theNews.url}
            />
          </NavLink>
        );
      })}
      <div style={{ width: '500px', marginTop: '20px' }}>
        <div style={{ width: '100%', marginBottom: '35px' }} className={'d-flex justify-content-between'}>
          <button className={'btn btn-primary'} onClick={() => setPrevPage()}>
            Prev
          </button>
          <button className={'btn btn-primary'} onClick={() => setNextPage()}>
            Next
          </button>
          <button className={'btn btn-primary'} onClick={() => updateNewsList()}>
            Update news list
          </button>
        </div>
      </div>
    </>
  );
};

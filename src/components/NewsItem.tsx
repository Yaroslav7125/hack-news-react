import React from 'react';
import { News } from '../store/index';

export const NewsItem: React.FC<News> = ({ id, points, time, user, title }) => {
  const date = new Date(time).toLocaleDateString();
  // eslint-disable-next-line no-console
  console.log(date);
  return (
    <div style={newsCard} className={'flex-column'}>
      <span style={{ fontSize: '10px', textDecoration: 'none' }}>{title}</span>
      <div className={'d-flex justify-content-between'}>
        <div>
          <span>{points}</span>
        </div>
        <div>
          <span>{user}</span>
        </div>
        <div>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

const newsCard = {
  width: '500px',
  height: '50px',
  backgroundColor: 'grey',
  border: '3px solid',
  borderColor: 'black',
  borderRadius: '5px',
  padding: '5px',
  display: 'flex',
  margin: '5px',
  textDecoration: 'none',
};

export default NewsItem;

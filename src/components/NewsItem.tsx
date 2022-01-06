import React from 'react';
import { News } from '../store/index';

export const NewsItem: React.FC<News> = ({ id, points, time, user, title }) => {
  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <div style={newsCard}>
      <p style={{ fontSize: '10px' }}>{title}</p>
      <span>id = {id}</span>
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
};

export default NewsItem;

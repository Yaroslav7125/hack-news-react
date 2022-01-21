import React from 'react';
import { News } from '../types';

export const NewsItem: React.FC<News> = ({ points, time_ago, user, title }) => {
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
          <span>{time_ago}</span>
        </div>
      </div>
    </div>
  );
};

const newsCard = {
  width: '500px',
  height: '50px',
  backgroundColor: '#ec7c26',
  border: '3px solid',
  borderColor: 'black',
  borderRadius: '5px',
  padding: '5px',
  display: 'flex',
  margin: '5px',
  textDecoration: 'none',
  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
};

export default NewsItem;

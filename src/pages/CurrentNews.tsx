import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsItem } from '../services/getNews';

export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[]; // Comments are items too
  level: number;
  comments_count: number;
}

export const CurrentNews = () => {
  const { id } = useParams();

  const [currentNews, setCurrentNews] = useState<Item | null>(null);

  useEffect(() => {
    fetchNewsItem(Number(id)).then((result) => {
      setCurrentNews(result.data as Item);
      // eslint-disable-next-line no-console
      console.log(result);
    });
  }, [id]);

  return <h1>{currentNews?.title}</h1>;
};

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchNewsItem } from '../services/getNews';
import { CommentItem } from '../components/CommentItem';
import { ItemComment } from '../types';

export const CurrentNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentNews, setCurrentNews] = useState<ItemComment | null>(null);

  const updateCommentsList = () => {
    fetchNewsItem(id).then((result) => {
      return setCurrentNews(result?.data ? result.data : null);
    });
  };

  useEffect(() => {
    updateCommentsList();
    const clearId = setInterval(() => {
      updateCommentsList();
    }, 60000);
    return () => clearInterval(clearId);
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <div style={{ width: '600px' }}>
        <h3>{currentNews?.title}</h3>
        <span>
          Author: {currentNews?.user}, Time: {currentNews?.time_ago}, comments: {currentNews?.comments_count}
        </span>
        <div>
          <a style={refsDecoration} href={currentNews?.url}>
            Read more...
          </a>
        </div>
        <div className={'d-flex justify-content-between'}>
          <button className={'btn btn-primary'} onClick={updateCommentsList}>
            Refresh
          </button>
          <button onClick={() => navigate(-1)} className={'btn btn-primary'}>
            Back to list
          </button>
        </div>
        {currentNews?.comments.map((comment) => {
          return (
            <CommentItem
              id={comment.id}
              key={comment.id}
              comments={comment.comments}
              user={comment.user}
              time={comment.time}
              content={comment.content}
              time_ago={comment.time_ago}
              title={comment.title}
              comments_count={comment.comments_count}
            />
          );
        })}
      </div>
    </>
  );
};

const refsDecoration = {
  textDecoration: 'none',
};

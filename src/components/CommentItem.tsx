import React, { useState } from 'react';
import { ItemComment } from '../types';
import sanitizeHtml from 'sanitize-html';
import Interweave from 'interweave';

export const CommentItem: React.FC<ItemComment> = ({ comments, time_ago, comments_count, content, user }) => {
  const [flag, setFlag] = useState(false);

  return (
    <div style={{ margin: '6px' }}>
      <div
        style={commentItemStyle}
        onClick={() => {
          setFlag((prevValue) => {
            return !prevValue;
          });
        }}
      >
        <Interweave content={sanitizeHtml(content, { allowedTags: false, allowedAttributes: false })} />
        <div className={'d-flex justify-content-between'}>
          <p>
            {user} {time_ago}
          </p>
          <p>Comments count: {comments_count}</p>
        </div>
      </div>
      {flag ? (
        <div style={{ marginLeft: '20px', borderLeft: '3px solid grey' }}>
          {comments.map((comment) => {
            return (
              <CommentItem
                comments={comment.comments}
                id={comment.id}
                time={comment.time}
                user={comment.user}
                content={comment.content}
                key={comment.id}
                time_ago={comment.time_ago}
                comments_count={comment.comments_count}
              />
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
};

const commentItemStyle = {
  border: '2px solid grey',
  padding: '5px',
  borderRadius: '4px',
  cursor: 'pointer',
};

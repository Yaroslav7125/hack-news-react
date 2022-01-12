import React, { useState } from 'react';
import { ICommentItem } from '../pages/CurrentNews';
import sanitizeHtml from 'sanitize-html';
import Interweave from 'interweave';

export const CommentItem: React.FC<ICommentItem> = ({ id, comments, time, user, content, children }) => {
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
        <p> {}</p>
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

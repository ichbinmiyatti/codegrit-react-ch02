import React from 'react';
import Comment from './Comment';

const props = {
  username: 'testuser',
  comment: 'This is the insta-card!'
}

const props2 = {
  username: 'testuser2',
  comment: 'So cool!'
}

const Comments = () => (
  <ul className="comments">
    <Comment {...props} />
    <Comment {...props2} />
  </ul>
);

export default Comments;

import React from 'react';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ content }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <p>{content}</p>
      <TweetInteractions />
    </div>
  );
};

export default Tweet;

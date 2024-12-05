// src/components/TweetList.jsx
import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} text={tweet.text} />
      ))}
    </div>
  );
};

export default TweetList;


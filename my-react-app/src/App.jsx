// src/App.jsx
import React, { useState } from "react";
import TweetInput from "./components/TweetInput";
import TweetList from "./components/TweetList";

const App = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (tweetText) => {
    const newTweet = { id: Date.now(), text: tweetText };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <TweetInput onAddTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default App;

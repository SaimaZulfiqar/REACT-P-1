// src/components/TweetInput.jsx
import React, { useState } from "react";

const TweetInput = ({ onAddTweet }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTweet(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tweet-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput;

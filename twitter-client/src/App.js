import React from 'react';
import ShowTweets from "./component/showTweets";
import GetTweetsByUser from "./component/getTweetsByUser";
import Post from "./component/post";
import Search from "./component/search";

function App() {
  return (
    <div className="App">
        <Post/>
        <Search/>
        <GetTweetsByUser/>
        <ShowTweets />
    </div>
  );
}

export default App;

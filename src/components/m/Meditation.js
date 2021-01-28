import React from 'react';
import NavBar from '../NavBar';
import './Meditation.css'
import ReactPlayer from 'react-player';

const Meditation = () => {
  return (
    <div className="Meditation">
      <NavBar />
      <h1>Meditation</h1>

      <li className = "video-list">
        <ul>
          <ReactPlayer url= "https://www.youtube.com/watch?v=gUqLVa34S3c" />
        </ul>
        <ul>
          <ReactPlayer url= "https://www.youtube.com/watch?v=TWrnP8-s_P8" />
        </ul>
        <ul>
          <ReactPlayer url= "https://www.youtube.com/watch?v=ykDPtWdxOxs" />
        </ul>
        <ul>
          <ReactPlayer url= "https://www.youtube.com/watch?v=8NB3ihqPQGw" />
        </ul>

        <ul>
          <ReactPlayer url= "https://www.youtube.com/watch?v=kTUGo6ZduPg" />
        </ul>

        <ul>
          <ReactPlayer url= "https://www.youtube.com/watch?v=buPuB4Sa0zU" />
        </ul>
        <ul>
          <ReactPlayer url= "" />
        </ul>
      </li>
      
      
    </div>
  );
};

export default Meditation;
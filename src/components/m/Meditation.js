import React, { Component } from 'react';
import NavBar from '../NavBar';
import './Meditation.css'
import ReactPlayer from 'react-player';
import axios from 'axios';

class Meditation extends Component {
 
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [{}],
      isFetched: false,
    };


    this.componentDidMount = this.componentDidMount.bind(this);

  }


  componentDidMount = () => {
    const options = {
      method: 'GET',
      url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
      params: { q: 'meditation' },
      headers: {
        'x-rapidapi-key': '196bc093famsh5e9ee364356a7eep1b8326jsnc636f539b062',
        'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com'
      }
    };
    let newResults = [];
    axios.request(options).then(function (response) {

      newResults = response.data;
      console.log(newResults);
      this.setState({isFetched: true});


    }).catch(function (error) {
      console.error(error);
    });

    console.log('new');
    console.log(newResults);
    this.setState({ searchResults: newResults.items });

    console.log(this.searchResults);

  }

  render() {
    return (
      <div className="Meditation">
        <NavBar />
        <h1>Meditation</h1>

        {this.searchResults &&
          (this.searchResults.length === 0
            ? <li className="video-list">
              <ul>
                <ReactPlayer url="https://www.youtube.com/watch?v=gUqLVa34S3c" />
              </ul>
              <ul>
                <ReactPlayer url="https://www.youtube.com/watch?v=TWrnP8-s_P8" />
              </ul>
              <ul>
                <ReactPlayer url="https://www.youtube.com/watch?v=ykDPtWdxOxs" />
              </ul>
              <ul>
                <ReactPlayer url="https://www.youtube.com/watch?v=8NB3ihqPQGw" />
              </ul>

              <ul>
                <ReactPlayer url="https://www.youtube.com/watch?v=kTUGo6ZduPg" />
              </ul>

              <ul>
                <ReactPlayer url="https://www.youtube.com/watch?v=buPuB4Sa0zU" />
              </ul>
              <ul>
                <ReactPlayer url="" />
              </ul>
            </li>

            : (
              <ul className="items">
                {this.searchResults.map(item => (
                  <li className="item" key={item.id}>
                    <div>
                      <b><a href={item.link}>{item.title}</a></b>
                      <p>{item.description}</p>
                    </div>
                    <ul className="meta">
                      <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                      <li>Views: {item.views}</li>
                      <li>Duration: {item.duration}</li>
                      <li>Uploaded: {item.uploaded_at}</li>
                    </ul>
                    <img alt="" src={item.thumbnail} />
                  </li>
                ))}
              </ul>
            )
          )
        }




      </div>
    )
  }
};

export default Meditation;
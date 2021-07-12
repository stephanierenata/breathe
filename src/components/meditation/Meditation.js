import React, { Component } from 'react';
import NavBar from '../NavBar';
import './Meditation.css'

class Meditation extends Component { 

  render() {
    return (
      <div className="Meditation">
        <NavBar />
        <h1>Meditation</h1>
        <label >Source: Goodful</label>
        <br></br>
        <a href = "https://www.youtube.com/watch?v=O-6f5wQXSu8&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=1" class="meditation-link">
          <div class="meditation-block anxiety-block">
            <label class="meditation-title">Anxiety</label>
          </div>
        </a>

        <a href = "https://www.youtube.com/watch?v=itZMM5gCboo&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=3">
          <div class="meditation-block self-love-block">
            <label class="meditation-title">Self Love</label>
          </div>
        </a>

        <a href = "https://www.youtube.com/watch?v=aEqlQvczMJQ&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=4">
          <div class="meditation-block sleep-block">
            <label class="meditation-title">Sleep</label>
          </div>
        </a>

        <a href = "https://www.youtube.com/watch?v=z6X5oEIg6Ak&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=6">
          <div class="meditation-block stress-block">
            <label class="meditation-title">Stress</label>
          </div>
        </a>

        <a href = "https://www.youtube.com/watch?v=wkse4PPxkk4&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=10">
          <div class="meditation-block anger-block">
            <label class="meditation-title">Anger</label>
          </div>
        </a>

        <a href = "https://www.youtube.com/watch?v=xRxT9cOKiM8&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=12">
          <div class="meditation-block depression-block">
            <label class="meditation-title">Depression</label>
          </div>
        </a>


      </div>
    )
  }
};

export default Meditation;
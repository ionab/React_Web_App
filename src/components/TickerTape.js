import React from 'react';
import './tickerTape.css';


class TickerTape extends React.Component {
  render(){
    if (!this.props.stories) return null;
    const allTopStories = this.props.stories.map(story =>
      <li>{story.title}</li>
    )
    return(
      <div id="moveThing">
        <ul id="ticker01">
          <li id="move"><span>{allTopStories}</span></li>
        </ul>
      </div>
    )
  }
}

export default TickerTape;

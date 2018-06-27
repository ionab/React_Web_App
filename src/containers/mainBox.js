import React from 'react';
import TopStoriesList from "../components/TopStoriesList";
import './mainBox.css';
import TickerTape from "../components/TickerTape.js";

class MainBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stories: null
    }
  }

  componentDidMount(){
    const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api_key=82460fefbd7e44a89a0cdd3ba7a4d93a";
    fetch(url).then(res => res.json()).then(data => this.setState({stories: data.results}))
  }

  render(){

    return(
      <div>
      <div className="shutuped">
        <img id="header"src="https://www.nytco.com/wp-content/themes/nytco/images/nytco/NYT-wordmark.png"/>
        <TickerTape stories={this.state.stories}/>
        <h2 className="top-stories">Top Stories</h2>

        </div>
        <div className="list">
      <TopStoriesList stories={this.state.stories}/>
      </div>
    </div>
    )
  }


}





export default MainBox;

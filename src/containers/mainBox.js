import React from 'react';
import TopStoriesList from "../components/TopStoriesList";

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
        <h1>NEW YORK TIMES</h1>
      <TopStoriesList stories={this.state.stories}/>
    </div>
    )
  }


}





export default MainBox;

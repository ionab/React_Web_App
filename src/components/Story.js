import React from "react";

 const Story = function(props){
   console.log(props.story);

    return(
      <div className="story">
        <h3>{props.story.title}</h3>
        <p>{props.story.abstract}</p>
        <a href={props.story.url}>Read More</a>
        <img src={props.story.multimedia[0].url} alt="Image of Article"></img>
        <h4>{props.story.byline}</h4>
      </div>
    )
}
export default Story;

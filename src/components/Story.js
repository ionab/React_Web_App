import React from "react";
import "./story.css"

 const Story = function(props){
   console.log(props.story);
   let image;
   const multimediaArray = props.story.multimedia
   if (multimediaArray.length > 0){
      image = <img className="image" src={props.story.multimedia[3].url} alt="Image of Article"></img>
   }else {image = null}


    return(
      <div className="story">
        <h3 className='title'>{props.story.title}</h3>
        <div>
          {image}

        </div>
        <p className="abstract">{props.story.abstract}</p>
        <a href={props.story.url}>Read More</a>

        <h4>{props.story.byline}</h4>
      </div>
    )
}
export default Story;

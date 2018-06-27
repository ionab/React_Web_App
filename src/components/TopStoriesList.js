import React from 'react';
import Story from "./Story.js"

const TopStoriesList = (props) => {
  if (!props.stories) return null;
  const allTopStories = props.stories.map(story =>
    <Story story={story}/>

  )
  return(
    <div>
      <h2>Top Stories</h2>
      {allTopStories}
    </div>
  )
}

export default TopStoriesList;

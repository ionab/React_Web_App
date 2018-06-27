import React from 'react';
import Story from "./Story.js"
import './topStoriesList.css'

const TopStoriesList = (props) => {
  if (!props.stories) return null;
  const allTopStories = props.stories.map(story =>
    <Story story={story}/>

  )
  return(

      <div>

        <div className='allTopStories'>
          {allTopStories}
      </div>

    </div>
  )
}

export default TopStoriesList;

import React from 'react';


const NewsItem = ({story}) => {
  
  return(
    <>
      <a href={story.url} target="_blank"><h1>{story.title}</h1></a>
      
   

    </>
  )
}


export default NewsItem;
import React from 'react';
import NewsItem from '../components/NewsItem';
        
const NewsList = ({news, loaded}) =>{
            
  if(!loaded) {
    return <p>Patience patience</p>;
  }
  console.log(news);
                
  const newsItems = news.map((story) => {
    return <NewsItem story={story} key={story.id}/>
    });

    return(
      <>                            
      <ul>
        {newsItems}
      </ul>
    </>
    )
  }
  
  export default NewsList;
  





  
  // 
  //     const movieItems = movies.map((movie) => {
      //       return (
          //         <MovieItem movie={movie} key={movie.id}/>
          //       );
          //    

// import React from 'react';
// import NewsItem from '../components/NewsItem';

// const NewsList = ({news, loaded}) =>{

//     if(!loaded) {
//         return <p>Patience patience</p>
//     }


    
//     return(
//         <>
//         {news.map((story) => {
//             return(
//                 <NewsItem story={story} key={story.id}/>
//                 )
//             })}
//             <ul>
//               {NewsItem}
//             </ul>
//         </>
//     )
// }

// export default NewsList;

/* const Chart = (props) => {
    if (props.songs == null || props.songs.length === 0) {
        return <p>Loading...</p>;
    }
    
    return (
        <div>
        {props.songs.map((song, index) => {
            return (
                <Song
                key={index}
                position={index + 1}
                title={song['im:name'].label}
                artist={song['im:artist'].label}
                image={song['im:image'][1].label}
                audio={song.link[1].attributes.href}
                handlePlayPause={props.handlePlayPause}
                />
                )
            })}
            </div>
            );
        }; */
        
        
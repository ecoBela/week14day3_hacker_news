import React, { Fragment, useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const NewsBox = () => {

  const [news, setNews] = useState({});

  const [loaded, setLoaded] = useState(false);

  const getNews = () => {
    console.log("Just a minute!!! I am fetching the news NOW!");
    fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=30`)
    .then(res => res.json())
    .then((data) => {
        const promises = data.map(storyId => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
        })
        Promise.all(promises)
        .then((data) => setNews(data))
        .then(() => setLoaded(true))
    }) // create another array of promises
    .catch(err => console.error);
  }

  // // 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&limitToFirst=30'

  useEffect(() => {
      getNews();
  }, [])
    
    return(
        <>
            <h1>This is a newsbox</h1>
            <SearchBar/>
            <NewsList news={news} loaded={loaded}/>
        </>
    )
}

export default NewsBox;
import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const newsUpdate = async ()=> {
        const url =`https://newsdata.io/api/1/news?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&language=en&image=1&size=${props.pageSize}`
        let data =  await fetch(url);
        let parsedata = await data.json();
        setResults(parsedata.results)
        setTotalResults(parsedata.totalResults)
    }

    useEffect(() => {
        document.title = `GO-News - ${capitalizeFirstLetter(props.category)} top headlines`;
        newsUpdate();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {   
        const url = `https://newsdata.io/api/1/news?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&language=en&image=1&size=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setResults(results.concat(parsedData.results));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <div className='container my-75 ' style={{ "margin": "75px auto" }}>
            <h2 className='text-center text-dark'>Today's latest Top Headlines</h2>
            <InfiniteScroll
                    dataLength={results.length}
                    next={fetchData}
                    hasMore={results.length !== totalResults}
                    loader={<p>Loading...</p>}
                > 
            <div className="row">
                
                {results && results.map((element) => {
                    return <div className='col-md-4' key={element.link}>
                        <NewsItems title={element.title ? element.title : ""} content={element.content ? element.content : ""}
                            link={element.link} imageUrl={element.image_url} author={element.author} date={element.pubDate} />
                    </div>
                })
                }
            </div>
           </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "world"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;

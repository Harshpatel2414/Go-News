import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const newsUpdate = async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data =  await fetch(url);
        let parsedata = await data.json();
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
    }
    useEffect(() => {
        document.title = `GO-News - ${capitalizeFirstLetter(props.category)} top headlines`;
        newsUpdate();
        // eslint-disable-next-line
    }, []);

    const showNext = async () => {
        setPage(page + 1);
        newsUpdate();
    }

    const showPrev = async () => {
        setPage(page - 1);
        newsUpdate();
    }

    return (
        <div className='container my-75 ' style={{ "margin": "75px auto" }}>
            <h2 className='text-center text-success'>Today's latest Top Headlines</h2>
            <div className="row">
                {articles.map((element) => {
                    return <div className='col-md-4' key={element.url}>
                        <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                            newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} />
                    </div>
                })
                }
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={page <= 1} type='button' className='btn btn-dark' onClick={showPrev}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type='button' className='btn btn-dark' onClick={showNext}>Next &rarr;</button>
            </div>
        </div>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;

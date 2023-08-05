import React from 'react'

const NewsItems = (props)=> {
        //let { title, description, newsUrl, imageUrl, author, date} = props;
        return (
            <div className='my-3 '>
                <div className="card w-100" >
                    <img src={!props.imageUrl?"GO - News":props.imageUrl} className="card-img-top" alt="Go-News" />
                    <div className="card-body">
                        <p className="card-text"><small className='text-muted'>By {!props.author?"Go-news":props.author} on {new Date(props.date).toGMTString()}</small></p>
                        <h5 className="card-title">{props.title}</h5> 
                        <p className="card-text">{props.description}</p>
                        <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark d-grid gap-2 mx-auto">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItems;
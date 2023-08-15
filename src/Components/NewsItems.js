import React from 'react'

const NewsItems = (props)=> {
        let { title, content, link, imageUrl, date} = props;
        return (
            <div className='my-3 d-flex align-items-stretch'>
                <div className="card w-100" >
                    <img src={!imageUrl?"GO - News":imageUrl} className="card-img-top" style={{"height":"200px"}} alt="Go-News" />
                    <div className="card-body ">
                        <p className="card-text"><small className='text-muted'>Publish on {date}</small></p>
                        <h5 className="card-title">{title.slice(0,50)}...</h5> 
                        <p className="card-text">{content.slice(0,80)}...</p>
                        <a href={link} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark d-grid gap-2 mx-auto">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItems;
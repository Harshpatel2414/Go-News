import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { title, description, newsUrl, imageUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card w-100" >
                    <img src={imageUrl} className="card-img-top" alt="Go-News" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark d-grid gap-2 mx-auto">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

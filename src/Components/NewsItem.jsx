import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="}
                        className="card-img-top" alt="coverimage" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{ left: "90%", zIndex: "1" }}>
                            {source}
                        </span>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">Buy : {author ? author : "Unknown author"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

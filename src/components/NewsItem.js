import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45) + "...."}</h5>
            <p className="card-text">{description.slice(0, 88) + "...."}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
            {/* <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a> */}
            <Link rel="noreferrer" to={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</Link>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
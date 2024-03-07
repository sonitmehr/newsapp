import React from "react";

const NewsItem = (props) => {
    let { description, title, imageUrl, newsUrl, author, publishedAt, source } =
      props;
    return (
      <div>
        <div className="card my-3">
          <div style={{display:'flex',position:'absolute',alignItems : 'flex-end',right:1}}>
            <span
              className="badge rounded-pill bg-danger"
              
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl == null
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHepEk0N8j-wt-1aVkY1bqEW6LZw9mfAkPI56yms9Jg&s"
                : imageUrl
            }
            alt="..."
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unkown"} on {publishedAt}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;

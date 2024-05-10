import React from 'react';

const Card = ({ data, onLearnMore }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={data.thumbnail?.small} alt="Thumbnail" />
        <div className="overlay-div">
          <span className="learn-more" onClick={()=>onLearnMore()}>Learn More</span>
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title"  onClick={()=>onLearnMore()}>{data.title}</h2>
        <p className="card-text">{data.content}</p>
        <div className="card-footer">
          <div className="author-info">
            <span className="author-name">{data.author?.name}</span>
            <span className="author-role">{data.author?.role}</span>
          </div>
          <span className="data-date">{formatDate(data.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
import React from 'react';

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="card">
            <div className="card-thumbnail">
              <img src={item.thumbnail?.small} alt="Thumbnail" />
            </div>
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.content}</p>
              <div className="card-footer">
                <div className="author-info">
                    <img className="author-avatar" src={item.author?.avatar}alt="author-avatar" /> 
                  <span className="author-name">{item.author.name}</span>
                  <span className="author-role">{item.author.role}</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

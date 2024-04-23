import React, { useState } from 'react';
import ReviewForm from './ReviewForm';

function Dashboard({ username, onLogout }) {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="dashboard">
      <h1 className='welcome'>Welcome, {username}!</h1>
      
      <ReviewForm onAddReview={handleAddReview} /><br/><br/><br/>
      <button onClick={onLogout} className='logout'>Logout Account</button><br/><br/>
      <div className="review-list"> 
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.title}</h3>
            <p>Date: {review.date}</p>
            <p>{review.body}</p>
            <button onClick={() => handleDeleteReview(index)} className='delete'>Delete</button>
          </div>
          
        ))}
      </div>
    </div>
    
  );
}

export default Dashboard;

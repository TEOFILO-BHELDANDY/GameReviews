import React, { useState } from 'react';

function ReviewForm({ onAddReview }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      title,
      date,
      body,
    };
    onAddReview(review);
    setTitle('');
    setDate('');
    setBody('');
  };

  return (
    <div className="review-form">
      
      <form onSubmit={handleSubmit}>
        <input className='title'
          type="text"
          placeholder="What's Your Game Title?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br/><br/>
        <input className='date'
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /><br/><br/>
        <textarea className='write'
          placeholder="Write Your Review About The Game"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        /><br/>
        <button type="submit" className='sub'>Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;

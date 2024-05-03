import { useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';

const LeaveReview = ({ techInfo, onClose }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  const baseURL = "http://localhost:4001"

  const handleSubmit = () => {
    if (!comment.trim()) {
      setError('Please enter a comment.');
      return;
    }

    if (comment.length > 150) {
      setError('Comment must be less than 150 characters.');
      return;
    }

    if (rating < 0 || rating > 5) {
      setError('Rating must be between 0 and 5.');
      return;
    }
    const date = new Date(); 
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' '); 

    const requestBody = {
        note: rating,
        comment: comment,
        date: formattedDate,
        AI: techInfo.id_ais
    };

    const postData = async () => {
        try {
            const response = await axios.post(`${baseURL}/reviews`, requestBody);
            console.log("success");
            onClose();
        } catch (error) {
            console.log("error posting review");
        }
    };
    postData();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <div className="relative bg-red-500 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
                <button className="absolute top-0 right-0 p-6 text-white rounded-full bg-red" onClick={onClose}>
                &#10005;
                </button>
        <h2 className="text-lg font-semibold mb-4">Leave Your Review</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <textarea
        className="w-full h-32 border border-gray-300 rounded-md mb-4 p-2 text-black"
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="flex items-center mb-4">
        <span className="mr-2">Rating:</span>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit Review
      </button>
      </div>
    </div>
  );
};

export default LeaveReview;

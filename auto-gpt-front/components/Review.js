
import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Review = ({ review }) => {
    
    return (
        <div className="bg-black border-2 border-red-500 rounded-lg p-6 text-white">
          <div className="relative">
            <h2 className="text-xl font-bold mb-4">{review.fecha}</h2>
            <p className="mb-0">{review.comentario}</p>
            <div >
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={review.calificacion} readOnly />
                </Box>
            </div>
          </div>
        </div>
      );      
};

export default Review;

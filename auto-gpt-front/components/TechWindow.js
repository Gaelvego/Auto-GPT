import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import Review from "./Review";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeaveReview from "./LeaveReview";

const TechWindow = ({ technology, onClose}) => {
    const [clickedTechInfo, setClickedTechInfo] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [reviewOpen, setReviewOpen] = useState(false);

    const handleLeaveReview = () => {
        setReviewOpen(true);
    };

    const handlePopupClose = () => {
        setReviewOpen(false);
    };

    const baseURL = "http://localhost:4001"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/ai/${technology}`);
                const reviewsResponse = await axios.get(`${baseURL}/reviews/${technology}`);
                setClickedTechInfo(response.data);
                setReviews(reviewsResponse.data);
    
            } catch (error) {
                console.log("error fetching data")
            }
        };
        fetchData();
    }, []); 

    const carouselSettings = {    
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Show 5 reviews at a time
        slidesToScroll: 1,
    };
      
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            {reviewOpen && <LeaveReview techInfo = {clickedTechInfo} onClose={handlePopupClose}/>}
            <div className="relative bg-red-500 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
                <button className="absolute top-0 right-0 p-6 text-white rounded-full bg-red" onClick={onClose}>
                &#10005;
                </button>
                <div className="flex">
                    <img src="/aboutGraphic.png" alt={`${clickedTechInfo.ai_name} logo`} className="w-48 h-48 rounded-full mr-4" />
                    <div>
                        <h2 className="text-white font-bold text-xl mb-2">Technology Details</h2>
                        <p className="text-white mb-2">Name: {clickedTechInfo.ai_name}</p>
                        <p className="text-white mb-2">Description: {clickedTechInfo.descripcion}</p>
                        <p className="text-white mb-2">License: {clickedTechInfo.licencia}</p>
                        <p className="text-white mb-2">Subscription: {clickedTechInfo.suscripcion}</p>
                        <p className="text-white mb-2">Link: {clickedTechInfo.link}</p>
                        <p className="text-white mb-2">Category: {clickedTechInfo.proposito}</p>
                        <p className="text-white mb-2">Ecosystem: {clickedTechInfo.nombre}</p>
                        <p className="text-white mb-2">Content Type: {clickedTechInfo.type_content}</p>
                    </div>
                </div>
                <div>
                <h3 className="text-white mt-4 mb-2">User Reviews</h3>
                <Slider {...carouselSettings} className="mb-4">
                    {reviews.slice(0, 20).map((review, index) => (
                    <div key={index}>
                        <Review review={review}/>
                    </div>
                    ))}
                </Slider>
                <button className="bg-white text-black py-2 px-4 rounded-md" onClick={handleLeaveReview}>Leave Your Review</button>
                </div>
            </div>
        </div>

      );      
};

export default TechWindow;

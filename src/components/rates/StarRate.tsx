import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRate.css';

// import useAxios from 'axios-hooks'

const axios = require('axios');

const StarRating = () => {
    const [rating, setRating] = useState<any | null>(null);
    const [hover, setHover] = useState<any | null>(null);

    const handleclick = (ratingValue: any) => {
        setRating(ratingValue)
        axios.post(`http://localhost:8000/reviews/`, {
            "stars": null,
            "user": null,
            "servicProvider": null
        })
            .then((results: any) => {
                console.log("axios", results);
                // dispatch(store(results.data))

            })
            .catch((err: any) => {
                console.error("err===== =>", err);
            })
    }

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => handleclick(ratingValue)}
                        />
                        <FaStar
                            className='star'
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={25}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                        {/* {loading && <p>loading</p>} */}
                    </label>
                );
            })}
            {/* <p>The rating is {rating}.</p> */}
        </div>
    );
}


export default StarRating;
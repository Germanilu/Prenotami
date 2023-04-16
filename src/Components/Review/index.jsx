import './index.scss'
import {FaStar} from 'react-icons/fa';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Review = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    const [totalRating,setTotalRating] = useState(0)
    const [reviewAvarage, setReviewAvarage] = useState(0)

    useEffect(() => {
    },[reviewAvarage])
    
    const GetReviewAverage = async() => {
        try{
            console.log("ENTRO")
            const attempt = await axios.get("https://bbdd-appuntami.onrender.com/api/getreviewavg");
            console.log("aqui",attempt)
            if(attempt.status === 200){
                setReviewAvarage(attempt.data.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    GetReviewAverage()
    console.log(rating)

    return(
        <div className='review-design'>
            <p>Review del servizio: {rating}</p>
           
            {[...Array(5)].map((star, i)  => {
                const ratingValue = i +1;
                return (
                    <label>
                        <input 
                            type="radio"
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />

                        <FaStar 
                            className='star' 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => setTotalRating(totalRating + rating)}
                            />
                    </label> 
                )
                 
            })}

            <div className='review-box'>
                {/* get review from backend */}
                {reviewAvarage}
            </div>
        </div>
    )
}

export default Review;
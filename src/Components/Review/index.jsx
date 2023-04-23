import './index.scss'
import {FaStar} from 'react-icons/fa';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Review = () => {
    
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    const [totalRating,setTotalRating] = useState(0)
    const [reviewAvarage, setReviewAvarage] = useState(0);
    const [allReviews, setAllReviews] = useState([]);
    
    useEffect(() => {
        GetAllReview()
        GetReviewAverage()
    },[reviewAvarage])
    
    /**
     * Get the review avarage score
    */
   const GetReviewAverage = async() => {
       try{
            const attempt = await axios.get("https://bbdd-appuntami.onrender.com/api/getreviewavg");
            if(attempt.status === 200){
                setReviewAvarage(attempt.data.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    /**
     * Get all the availables reviews on website
     */
    const GetAllReview = async() => {
        try {
            console.log("Allreview")
            const attempt = await axios.get("https://bbdd-appuntami.onrender.com/api/getreview");
            console.log("attempt",attempt.data.data)
            if(attempt.status === 200){
                setAllReviews(attempt.data.data)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
    
    console.log(rating)
    
    return(
        <div className='review-design'>
            <p>Review del servizio: {reviewAvarage}</p>
            <div className='review-box'>
                {
                    allReviews !== null ? (
                        allReviews.map(review => {
                           return(
                            <div>
                                <p>{review.name}</p>
                                <p>{review.review}</p>
                                <p>{review.rating}</p>
                                
                            </div>
                           )
                        })
                        
                    ):(
                        <div>empty</div>
                    )
                }
                <h2>Lascia un commento</h2>
                <br />
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
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' title='name' />
                <label htmlFor="message">Messaggio</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>

            
        </div>
    )
}

export default Review;
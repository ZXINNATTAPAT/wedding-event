// import './starrating.css'
// import StarRating from '../StarRating/StarRating.jsx';
import React, { useState, useEffect } from 'react';
import './starrating.css'
import { AiFillStar } from 'react-icons/ai';

const icon = (isSelected) => (
  <AiFillStar
      style={{
          color: isSelected ? '#f9d71c' : 'lightgrey',
          fontSize: '2rem',
          marginBottom: '2rem'
      }}
  />
);

const stars = [1, 2, 3, 4, 5];

const Review = () => {
  const [selectedStar, setSelectedStar] = useState();
//   const getEmail = localStorage.getItem("Email");

//   useEffect(() => {
//     axios.get(`http://localhost:5000/Review/${Email}`)
//         .then(response => {
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }, [Email]);

  return (
    <div className="user-reviews">
    <h2>Reviews</h2>
    <>
            <div className="flex">
                {stars.length > 0 &&
                    stars.map((starNum) => (
                        <button
                            type="button"
                            key={starNum}
                            onClick={() => setSelectedStar(starNum)}
                            className="star"
                        >
                            {icon(selectedStar === starNum || selectedStar > starNum)}
                        </button>
                    ))}
            </div>

        </>

    <div className="text-review">
        <textarea className="form-control" rows="4"></textarea>
        <button className='chooseroom'>รีวิว</button>
    </div>
</div>
  )
}


export default Review;

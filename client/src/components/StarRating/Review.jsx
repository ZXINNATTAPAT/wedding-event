import './starrating.css'
import StarRating from '../StarRating/StarRating';


function Review() {
  return (
    <div className="user-reviews">
    <h2>Reviews</h2>
    <StarRating/>

    <div className="text-review">
        <textarea className="form-control" rows="4"></textarea>
        <button className='chooseroom'>รีวิว</button>
    </div>
</div>
  )
}

export default Review

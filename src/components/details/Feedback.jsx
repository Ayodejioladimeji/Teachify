import './Feedback.css';
import Feed from './Feed';

const Feedback = ({ detailCourse }) => {
  const { reviews, user } = detailCourse;
  // console.log(detailCourse);

  return (
    <div className='feedback'>
      <h3>Student Feedbacks</h3>
      <div className='card'>
        <div className='card-body'>
          {reviews.length === 0 && <p>No Reviews on this course yet</p>}
          {reviews !== null &&
            reviews.map((item) => (
              <Feed {...item} key={item._id} user={user} />
            ))}
        </div>
      </div>

      {reviews.length <= 3 ? (
        ''
      ) : (
        <div className='load-more mt-5 text-center'>
          <button className='btn btn-primary'>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;

import React, { useState, useEffect, useRef } from 'react';
import Posts from './Posts';
import posts from './postsArray';
const App = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const postsPerPage = 3;
  let arrayForHoldingPosts = [];
  const ref = useRef(postsPerPage);
  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts);
    setPostsToShow(arrayForHoldingPosts);
  };
  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);
  const handleShowMorePosts = () => {
    loopWithSlice(ref.current, ref.current + postsPerPage);
    ref.current += postsPerPage;
  };
  return (
    <div>
      <Posts postsToRender={postsToShow} />
      <button onClick={handleShowMorePosts}>Load more</button>
    </div>
  );
};
export default App;

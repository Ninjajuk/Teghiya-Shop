import React, { useState } from 'react';


const text="An apple mobile which is nothing like apple"

const ReadMoreComponent = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const displayText = readMore
    ? text
    : text.split(' ').slice(0, 3).join(' ');

  return (
    <div>
      <p>{displayText}</p>
      {/* {text.split(' ').length > 3 && (
        <button onClick={toggleReadMore}>
          {readMore ? 'Read Less' : '...Read More'}
        </button>
      )} */}
    </div>
  );
};

export default ReadMoreComponent;

import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ reviews }) => {
  const stars = 4.6;
  const rating = Math.floor(stars);
  const stars1 = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars1.push(<BsStarFill />);
    } else if (i + 0.5 <= stars && stars < i + 1) {
      stars1.push(<BsStarHalf />);
    } else {
      stars1.push(<BsStar />);
    }
  }

  // const tempStars = Array.from({ length: 5 }, (_, index) => {
  //   const number = index + 0.5;
  //   return (
  //     <span key={index}>
  //       {stars >= index + 1 ? (
  //         <BsStarFill />
  //       ) : stars >= number ? (
  //         <BsStarHalf />
  //       ) : (
  //         <BsStar />
  //       )}
  //     </span>
  //   );
  // });

  return (
    <Wrapper>
      <div className='stars'></div>
      <p className='reviews'>{reviews} customer reviews</p>
      {stars1.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;

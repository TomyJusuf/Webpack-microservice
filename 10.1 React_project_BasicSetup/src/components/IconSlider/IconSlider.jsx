import React from 'react';
import './IconSlider.scss';

// Static imports for assets
import movie1 from '../../assets/1.jpeg';
import movie2 from '../../assets/2.jpeg';
import movie3 from '../../assets/3.jpeg';
import movie4 from '../../assets/4.jpeg';
import movie5 from '../../assets/5.jpeg';
import movie6 from '../../assets/6.jpeg';
import movie7 from '../../assets/7.jpeg';
import movie8 from '../../assets/8.jpeg';
import movie9 from '../../assets/9.jpeg';
import movie10 from '../../assets/10.jpeg';
import movie11 from '../../assets/11.jpeg';
import movie12 from '../../assets/12.jpeg';
import movie13 from '../../assets/13.jpeg';
import movie14 from '../../assets/14.jpeg';
import movie15 from '../../assets/15.jpeg';

// Map assets to their respective imports
const movieImages = {
  1: movie1,
  2: movie2,
  3: movie3,
  4: movie4,
  5: movie5,
  6: movie6,
  7: movie7,
  8: movie8,
  9: movie9,
  10: movie10,
  11: movie11,
  12: movie12,
  13: movie13,
  14: movie14,
  15: movie15,
};

function IconSlider(props) {
  const randomMovie = (items) => {
    const movList = [];
    for (let i = 0; i < items; i += 1) {
      const counter = Math.floor(Math.random() * 15) + 1; // Ensure 1-15 range
      const key = Date.now() * Math.random();
      const mov = (
        <img key={key} src={movieImages[counter]} alt={`Movie ${counter}`} />
      );
      movList.push(mov);
    }
    return movList;
  };

  return (
    <div className="list-container">
      <div className="list-title">{props.title}</div>
      <div className="movies-container">{randomMovie(5)}</div>
    </div>
  );
}

export default IconSlider;

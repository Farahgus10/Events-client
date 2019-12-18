import React from 'react';
import './Map.css';

class YogaMap extends React.Component {
  render() {
    return(
      <div className="map-filters">
        <div className="filters">
          <p>Looking for something more specific?</p>
          <form>
            <label htmlFor="yoga-type">Type: </label>
            <select name="Type">
              <option>Hot yoga</option>
              <option>Yin Yoga</option>
              <option>Ashtanga vinyasa yoga</option>
              <option>Kundalini Yoga</option>
              <option>Acroyoga</option>
              <option>Aerialc Yoga</option>
            </select>
            <label htmlFor="class-size">Class Size: </label>
            <select name="Class size">
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
              <option>Private</option>
            </select>
            <label htmlFor="class-level">Level: </label>
            <select name="level">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </form>
        </div>

        <div className="map">
          <p>Map here</p>
        </div>
        
      </div>
    )
  }
}

export default YogaMap;
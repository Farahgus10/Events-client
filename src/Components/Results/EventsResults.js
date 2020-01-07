import React from 'react';
import './EventsResults.css'

function EventsResults(props) {
  let allEvents = (!props.events.events) ? [] : props.events.events;

  let events = allEvents.map((event, i) => 
    <div key={i} className="event-box">
      <div className="like-box">
        <button type="button" onClick={e => props.handleLikeButton(e)}>Like</button>
      </div>
      <div className="checkin-box">
        <button type="button" onClick={e => props.handleCheckinButton(e)}>Check-in</button>
      </div>
      <ul > 
      <li>{event.title}</li>
        <ul>
          <li>Where: {event.venue.name}</li>
          <ul>
            <li>{event.venue.address}</li>
          </ul>
          <li>Date: {event.datetime_local.slice(0, 10)}</li>
          <li>Time: {event.datetime_local.slice(11, 16)}</li>
        </ul>
      </ul>
      
    </div>
    )

  console.log(allEvents)
  console.log("events: " + events)
  
  return(
    <div className="results">
        {events}
    </div>
  )
}

export default EventsResults;
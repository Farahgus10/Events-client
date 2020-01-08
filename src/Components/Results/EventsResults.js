import React from 'react';
import {Link} from 'react-router-dom';
import './EventsResults.css'

function EventsResults(props) {
  let allEvents = (!props.events.events) ? [] : props.events.events;

  let events = allEvents.map((event) => 
  <div className="event-box" key={event.id} >
    <div className="like-box">
      <button type="button" onClick={e => props.handleLikeButton(e)}>Like</button>
    </div>
    <div className="checkin-box">
      <button type="button" onClick={e => props.handleCheckinButton(e)}>Check-in</button>
    </div>

    <Link to={`/events/${event.id}`} >
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
    </Link>
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
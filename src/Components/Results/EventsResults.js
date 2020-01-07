import React from 'react';

function EventsResults(props) {
  let allEvents = (!props.events.events) ? [] : props.events.events;

  let events = allEvents.map((event, i) => 
    <ul key={i}>
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
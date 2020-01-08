import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

export default function DetailedEventInfo(props){
    let eventID = parseInt(props.match.params.eventID);
    let allEvents = (!props.events.events) ? [] : props.events.events;
    
    let filteredEvent = allEvents.map((event) => event).filter(event => event.id === eventID)
    
    let eventInfo = filteredEvent.map((event) => 
      <div key={event.id}>
        <h2>{event.title}</h2>
        <p>{event.venue.name}</p>
        <p>{event.datetime_local.slice(0, 10)}</p>
        <p>{event.datetime_local.slice(11, 16)}</p>
      </div>
    )
  
    console.log(filteredEvent)

    return(
    <div>
      {eventInfo}

      <CommentSection />
    </div>
    )
  } 

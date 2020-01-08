import React from 'react';

export default function DetailedEventInfo(props){
    let eventID = parseInt(props.match.params.eventID);
    let allEvents = (!props.events.events) ? [] : props.events.events;

    let filteredEvent = allEvents.map((event) => event).filter(event => event.id === eventID)
    console.log(filteredEvent)

    
    return(
    <div>
      <h1>detailed event info</h1>
    </div>
    )
  } 

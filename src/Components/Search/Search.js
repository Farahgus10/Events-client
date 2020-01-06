import React from 'react';


class Search extends React.Component {
  render(){
    return(
      <div>
        <form>
          <label htmlFor='event-search'>Search for events:</label>
          <input 
            id="event-search"
            type="text"
            name="event-search" 
            placeholder="e.g. Ultra Music Festival"/>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}

export default Search;
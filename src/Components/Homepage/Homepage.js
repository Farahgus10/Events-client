import React from 'react';
import Search from '../Search/Search'
import EventsService from '../../Services/Events-services'
import EventsResults from '../Results/EventsResults'

class Homepage extends React.Component {
  state = {
    events: [],
    searchTerm: '',
  }

  updateSearch = (searchTerm) => {
    this.setState({searchTerm})
  }

  handleSubmit = e => {
    e.preventDefault();

    EventsService.getEvents()
    .then(data => {
      this.setState({
        events: data,
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="homepage">
        <h1>Search for any event:</h1>
        <Search
          searchTerm={this.state.searchTerm}
          handleSubmit={this.handleSubmit}
        />

        <EventsResults
          events={this.state.events}
        />
      </div>
    )
  }
}

export default Homepage;


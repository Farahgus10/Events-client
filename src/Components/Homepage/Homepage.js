import React from 'react';
import Search from '../Search/Search'
import EventsService from '../../Services/Events-services'

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
    let results = (!this.state.events) ? [] : this.state.events.events;
    console.log(results);
    return (
      <div className="homepage">
        <h1>Search for any event:</h1>
        <Search
          events={this.state.events}
          searchTerm={this.state.searchTerm}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Homepage;


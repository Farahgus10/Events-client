import React from 'react';
import Search from '../Search/Search'
import EventsService from '../../Services/Events-services'
import EventsResults from '../Results/EventsResults'

class Homepage extends React.Component {
  state = {
    events: [],
    searchTerm: '',
  }

  /*=============================
      HANDLE SEARCH FEATURES
  =============================*/
  updateSearch = (searchTerm) => {
    this.setState({searchTerm})
  }

  handleSubmit = e => {
    e.preventDefault();
    let searchTerm = this.state.searchTerm;

    EventsService.getEvents(searchTerm)
    .then(data => {
      this.setState({
        events: data,
      })
    })
    .catch(err => console.log(err));
  }

  /*=============================
        HANDLE LIKE BUTTON
  =============================*/
  handleLikeButton = e => {
    e.preventDefault()
    console.log('like button clicked!');
  }

  /*=============================
        HANDLE CHECKIN BUTTON
  =============================*/
  handleCheckinButton = e => {
    e.preventDefault()
    console.log('Checkin button clicked!');
  }

  render() {
    return (
      <div className="homepage">
        <h1>Search for any event:</h1>
        <Search
          updateSearch={this.updateSearch}
          searchTerm={this.state.searchTerm}
          handleSubmit={this.handleSubmit}
        />

        <EventsResults
          events={this.state.events}
          handleLikeButton={this.handleLikeButton}
          handleCheckinButton={this.handleCheckinButton}
        />
      </div>
    )
  }
}

export default Homepage;


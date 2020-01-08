import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import EventsService from './Services/Events-services'
import Nav from './Components/Nav/Nav';
import Homepage from './Components/Homepage/Homepage'
import DetailedEventInfo from './Components/Results/DetailedEventInfo'

class App extends React.Component {
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
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>

      <Route exact path='/' render={() => (
        <Homepage events={this.state.events} searchTerm={this.state.searchTerm} updateSearch={this.updateSearch} handleSubmit={this.handleSubmit}
        handleLikeButton={this.handleLikeButton} handleCheckinButton={this.handleCheckinButton}
        /> )}/>

      <Route path="/events/:eventID" render={(props) => (
        <DetailedEventInfo events={this.state.events} {...props}/> )}/>
    </div>
    )
  }
}

export default withRouter(App);

const EventsService = {
    getEvents(searchTerm) {
        let api = 'client_id=MjAyMTc3NzB8MTU3ODMzNDk3OC4xMw';
        let url = `https://api.seatgeek.com/2/events?${api}`;

        if(searchTerm !== '') {
            url = `https://api.seatgeek.com/2/events?q=${searchTerm}&${api}`;
        }

        return fetch(url)
            .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default EventsService;
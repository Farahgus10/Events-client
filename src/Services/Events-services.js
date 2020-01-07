const EventsService = {
    getEvents() {
        let api = 'client_id=MjAyMTc3NzB8MTU3ODMzNDk3OC4xMw';
        let url = `https://api.seatgeek.com/2/events?${api}`;

        return fetch(url)
            .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default EventsService;
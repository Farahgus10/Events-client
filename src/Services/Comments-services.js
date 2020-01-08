const CommentsServices = {
  getComments() {
    return fetch(`http://localhost:8000/api/comments`, {
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  insertComment(eventId, text) {
    return fetch(`http://localhost:8000/api/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        event_id: eventId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getById(commentId) {
    return fetch(`http://localhost:8000/api/comments/${commentId}`, {
      // headers: {
      //   'authorization': `bearer ${TokenService.getAuthToken()}`,
      // },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteComment(commentId) {

  },
  updateComment(commentId) {

  }
}

export default CommentsServices;
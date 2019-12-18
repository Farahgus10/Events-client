import React from 'react';

function MantraForm () {
  return (
    <div className="mantra-form">
      <form className="submitMantra">
        <label htmlFor="mantra-submission">
          <p>Submit your favorite mantra!</p>
        </label>
        <input
          className="mantra-input"
          id="mantra-input"
          name="mantra-input"
        />
        <button className="mantra-input-btn" type="submit">Submit</button>
      </form>
    </div>   
  )
}

export default MantraForm;
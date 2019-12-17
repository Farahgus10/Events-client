import React from 'react'
import MantraForm from './MantraForm';
import PreviousMantras from './PreviousMantras';

function Mantra() {
  return (
    <div className="mantra">
      <h1>Mantra of the day</h1>
      <p>Breathe in, breathe out</p>
      <MantraForm />
      <PreviousMantras />
    </div>
  )
}

export default Mantra;
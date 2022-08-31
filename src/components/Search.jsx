import React, { useState } from 'react'
import './search.scss'

export default function Search({ setInpFiltr }) {
  const [inpValue, setInpValue] = useState('')

  return (
    <div className="search-container">
      <button onClick={() => setInpFiltr(inpValue)}>Search</button>
      <input
        placeholder='Filter by author'
        onChange={(e) => setInpValue(e.target.value)}
      />
    </div>
  )
}

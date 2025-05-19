import React, { useState } from 'react'

const Debugging = () => {
  const [count, setCount] = useState(0)

  return (
      <div>
        <button onClick = {() => setCount(count => count + 1)}>
            Click to increase: {count}
        </button>
        <h2>Heading 2</h2>
        <h2>Heading 3</h2>
      </div>
  )
}

export default Debugging;


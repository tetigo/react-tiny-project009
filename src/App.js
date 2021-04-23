import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const size = 10
  const [color, setColor] = useState('#F15025')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values(color).all(size))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hihihi')
    try {
      const listColors = new Values(color).all(size)
      console.log(listColors)
      setError(false)
      setList(listColors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
            placeholder="#F15025"
            // className={`${error ? 'error' : null}`}
            className={error ? 'error' : null}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, idx) => {
          console.log(color)
          return <SingleColor key={idx} {...color} index={idx} size={size} />
        })}
      </section>
    </>
  )
}

export default App

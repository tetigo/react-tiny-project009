import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  let [percent, setPercent] = useState(10)
  const [color, setColor] = useState('#F15025')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    const listColors = new Values(color).all(percent)
    setList(listColors)
  }, [percent])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const listColors = new Values(color).all(percent)
      setList(listColors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            style={{ marginRight: '20px', width: '100px' }}
            value={percent}
            onChange={(e) => {
              let valor = parseInt(e.target.value)
              if (valor <= 1) setPercent(1)
              else if (valor >= 101) setPercent(101)
              else setPercent(valor)
            }}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
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
        {list &&
          list.map((color, idx) => {
            return (
              <SingleColor key={idx} {...color} index={idx} size={percent} />
            )
          })}
      </section>
    </>
  )
}

export default App

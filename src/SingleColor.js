import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, size }) => {
  const [alert, setAlert] = useState(false)
  const [color, setColor] = useState('')
  useEffect(() => {
    //first method
    // setColor(rgbToHex(rgb[0], rgb[1], rgb[2]))
    //second method
    setColor(rgbToHex(...rgb))
  }, [rgb])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
      return () => clearTimeout(timeout)
    }, 3000)
  }, [alert])
  return (
    <article
      className={`color ${index > 100 / size && 'color-light'}`}
      style={{ backgroundColor: `${color}` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(color)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{color.toUpperCase()}</p>
      {alert && <p className="alert">copied to the clipboard</p>}
    </article>
  )
}

export default SingleColor

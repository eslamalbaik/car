import React from 'react'
import './Loader.css'
const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50">
  <div className="gears" id="two-gears">
    <div className="gears-container">
      <div className="gear-rotate"></div>
      <div className="gear-rotate-left"></div>
    </div>
  </div>
</div>
  )
}

export default Loader
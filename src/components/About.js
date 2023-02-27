import React from 'react'

function About(prpos) {
  return (
    <div><aside>
        <img src={prpos.img} alt={prpos.alt}></img>
        <p>Personal blog by {prpos.name}. I explain with words and code.</p>
        </aside></div>
  )
}

export default About
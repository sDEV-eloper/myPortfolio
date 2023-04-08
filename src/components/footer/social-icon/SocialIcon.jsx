import React from 'react'

function SocialIcon({icon, color, link}) {
  return (
    <dv className="social-icon"
    style={{backgroundColor: color}}
    onClick={()=>{
      window.open(link, "-_blank")
    }}
    >
{icon}
    </dv>
  )
}

export default SocialIcon
import React from 'react'

function projectCard({src,link,h3}) {
  return (
    <a href="https://github.com/Yogesh0925/Landing-Page" targer="_blank">
        <img className="hover" src={src} alt={'${h3} logo'} />
        <h3>{h3}</h3>
    </a>
  )
}

export default projectCard
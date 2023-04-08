import React from 'react'
import './section.scss'

function Section({children, id, className, title, background}) {
  return (
    <div className={`section ${className? className: ""} ${background==="dark"?"dark":"light"}`} id={id||""}>
        <div className="content">
            {title && (
                    <h2>{title}</h2>
                 )}
                {children}
        </div>
    </div>
  )
}

export default Section
import React from 'react'

function Container({children}) {
  return (
    <div>
        <h2>Este é o tiítulo do container</h2>
        {children}
    </div>
  )
}

export default Container
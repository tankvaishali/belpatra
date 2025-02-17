import React from 'react'

function HOC(Component) {
     function Newcomponent() {
        return(
            <>
            <Component/>
            </>
        )
     }
  return Newcomponent
}

export default HOC
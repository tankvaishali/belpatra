import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOC(Component) {
     function Newcomponent() {
        return(
            <>
            <Header/>
            <Component/>
            <Footer/>
            </>
        )
     }
  return Newcomponent
}

export default HOC
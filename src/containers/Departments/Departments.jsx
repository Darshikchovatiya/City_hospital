import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Header2 from '../../components/Header/Header2'
import Ent from '../../components/Ent/Ent'
import Footer from '../../components/Footer/Footer'

function Departments() {
  return (
    <div>
        <div className="main-header">
            <Topbar />
            <Header2 />
        </div>
        <main>
            <Ent />
        </main>
        <Footer />
    </div>
  )
}

export default Departments
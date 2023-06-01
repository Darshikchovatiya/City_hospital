import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div>
        <Topbar />
        <Header />
        <main>
            <Banner />
        </main>
    </div>
  )
}

export default Home
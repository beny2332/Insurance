import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPolicy, approveClaim } from './redux/store'
import Nav from './components/Nav'
import Header from './components/Header'
import Page from './components/pages/Page'

export default function App() {
  const treasure = useSelector((st:any)=>st.treasure)

  return (
    <div className='app'>
      <header>
        <Header/>
      </header>
      <aside>
        <Nav/>
      </aside>
      <main>
        <Page/>
      </main>

    </div>
  )
}

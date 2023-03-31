import Divers from './Divers'
import Dives from './Dives'
import Home from './Home'
<<<<<<< HEAD
import DiveForm from './DiveForm'
import { Link, Route, Routes } from 'react-router-dom'
import DiverForm from './DiverForm'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchDives } from '../actions/dives'
import { getJoins } from '../actions/joins'
import { fetchDivers } from '../actions/divers'
=======
import { Route, Routes } from 'react-router-dom'
import DiverForm from './DiverForm'
import DiveForm from './DiveForm'
>>>>>>> 590ec247b55492454ed28da320dbd2b9d4aa7a92

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDives())
    dispatch(getJoins())
    dispatch(fetchDivers())
  }, [])

  return (
    <>
      <header>
        <Link to="/">
          <h1>Dive One Oh One Application</h1>
        </Link>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divers" element={<Divers />} />
          <Route path="/dives" element={<Dives />} />
<<<<<<< HEAD
          <Route path="/dives/add" element={<DiveForm />} />
          <Route path="/divers/add" element={<DiverForm />} />
=======
          <Route path="/divers/add" element={<Divers />} />
          <Route path="/dives/add" element={<DiveForm />} />
>>>>>>> 590ec247b55492454ed28da320dbd2b9d4aa7a92
          {/* <Route path="/divers/add" element={<UpdateDiver />} />
          <Route path="/divers/add" element={<UpdateDive />} /> */}
        </Routes>
      </section>
    </>
  )
}

export default App

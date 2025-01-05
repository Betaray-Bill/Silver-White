import './index.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sell from './Pages/Sell'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<Landing />} />
          <Route path='/sell-cars' element={<Sell />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App

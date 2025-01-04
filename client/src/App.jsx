import './index.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Services from './components/Services'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<Landing />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App

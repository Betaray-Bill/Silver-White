import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import FilterCars from '@/Layout/Buy/FilterCars'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Navbar/>
      <Landing />
      <Services/>
      <FilterCars/>
      <Outlet />
    </div>
  )
}

export default Home

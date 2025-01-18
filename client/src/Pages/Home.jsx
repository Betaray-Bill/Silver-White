import Landing from '@/components/Landing'
import Services from '@/components/Services'
import FilterCars from '@/Layout/Buy/FilterCars'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Landing />
      <Services/>
      <FilterCars/>
      <Outlet />
    </div>
  )
}

export default Home

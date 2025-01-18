import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SidebarProvider, SidebarTrigger} from './components/ui/sidebar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AppRoutes from './Pages/AppRoutes'

function App() {
    const [count,
        setCount] = useState(0)

    return (
        <div>
            {/* <Routes>
                <Route path='/' element={< Login />}/>

                <Route path='/' element={< Home />}>
                </Route>
            </Routes> */}
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </div>
    )
}

export default App

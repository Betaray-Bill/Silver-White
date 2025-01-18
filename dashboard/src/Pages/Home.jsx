import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import Nav from '@/Layout/Home/Nav'
import AppSidebar from '@/Layout/Home/Sidebar/AppSidebar'
import React from 'react'
import {Outlet} from 'react-router-dom'

function Home() {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar/>
                <main>
                    <SidebarTrigger/> {/* {children} */}
                    <div className='p-2'>
                        <Nav/>
                        <div className='grid place-content-center p-2'>
                            <Outlet/>
                        </div>
                    </div>
                </main>
            </SidebarProvider>
        </div>
    )
}

export default Home

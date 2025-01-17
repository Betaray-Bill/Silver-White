import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar'
import React from 'react'
import { Link } from 'react-router-dom'

function AppSidebar() {
    const items = [
        {
            title: "Home",
            url: "/",
            //   icon: Home,
        }, {
            title: "Orders",
            url: "/home",
            //   icon: Inbox,
        }, {
            title: "Sale Cars",
            url: "sales",
            //   icon: Calendar,
        }, {
            title: "Bought Cars",
            url: "#",
            //   icon: Search,
        }, 
    ]
    
return (
        <div>
            <Sidebar>
                <SidebarHeader/>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <h2 className='text-lg font-semibold text-black'>Silver White</h2>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="mt-10">
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title} className="my-1 text-lg">
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url} href={item.url} className='text-lg text-black'>
                                                {/* <item.icon /> */}
                                                <span className='text-[16px]'>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter/>
            </Sidebar>
        </div>
    )
}

export default AppSidebar

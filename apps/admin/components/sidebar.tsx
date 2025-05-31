"use client"
import { Home, Settings, LayoutDashboard, List, ListTodo, CalendarCheck, LogOut } from "lucide-react"
import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarRail,
} from "@next-starter/ui/components/sidebar"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navbar() {
    const pathName = usePathname()

    return (
        <Sidebar className="border-r" collapsible="icon">
            <SidebarHeader className="border-b">
                <SidebarMenu>
                    <div className="flex items-center gap-2 py-2">
                        <LayoutDashboard className="bg-black dark:bg-white" />
                    </div>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Home">
                                    <Link href="/" className="flex items-center gap-2 ">
                                        <Home className="h-4 w-4" />
                                        <span>Home</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="flex-1">
                    <SidebarGroupLabel className="text-xs font-medium text-neutral-500">Private</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip={"Daily Todo"} isActive={pathName === "/products"}>
                                    <Link href={"/products/new"} className="flex gap-2 items-center w-full">
                                        <CalendarCheck className="h-4 w-4" />
                                        <span>Add Product</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="border-t">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip="Settings">
                                    <Link href="#" className="flex items-center gap-2 ">
                                        <Settings className="h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t">
                <SidebarMenu>
                    <div >
                        <SidebarMenuButton asChild tooltip="Logout">
                            <Link href="#" className="flex items-center gap-2 ">
                                <LogOut className="h-4 w-4" />
                                <span>Logout</span>
                            </Link>
                        </SidebarMenuButton>
                    </div>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
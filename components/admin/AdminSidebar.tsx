'use client'
import { BarChart, HomeIcon, Store, Users2 } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip"

const AdminSidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className=" hidden md:flex fixed top-4 bottom-4 left-3 w-16 flex-col items-center rounded-full bg-white py-4 z-40">

        <div className="flex flex-col gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant='ghost'>
                <HomeIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <BarChart />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Analytics</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <Users2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Users</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <Store />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Shops</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Avatar */}
        <div className="mt-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </aside>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-around bg-white py-2 m-3 rounded-full shadow-xl">
        <Button size="icon" variant="ghost">
          <HomeIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <BarChart />
        </Button>
        <Button size="icon" variant="ghost">
          <Users2 />
        </Button>
        <Button size="icon" variant="ghost">
          <Store />
        </Button>
        <Button size="icon" variant="ghost">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </nav>
    </>
  )
}

export default AdminSidebar

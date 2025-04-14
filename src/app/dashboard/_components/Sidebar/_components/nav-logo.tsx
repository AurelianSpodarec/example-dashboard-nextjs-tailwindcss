import Link from "next/link";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "./sidebar";

function Logo() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
      <path d='M104 0C90.7 0 80 10.7 80 24c0 11.2 7.6 20.6 18 23.2-7.8 8-16.1 17-24.4 27C38.2 116.7 0 178.8 0 250.9c0 44.8 24.6 72.2 48 87.8V352h48v-27c0-9-5-17.2-13-21.3-18-9.3-35-24.7-35-52.7 0-55.5 29.8-106.8 62.4-145.9 16-19.2 32.1-34.8 44.2-45.5 1.9-1.7 3.7-3.2 5.3-4.6 1.7 1.4 3.4 3 5.3 4.6 12.1 10.7 28.2 26.3 44.2 45.5 5.3 6.3 10.5 13 15.5 20L159 191c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57.8-57.8c12.8 25.9 21.2 54.3 21.2 83.8 0 28-17 43.4-35 52.7-8 4.1-13 12.3-13 21.3v27h48v-13.3c23.4-15.6 48-42.9 48-87.8 0-72.1-38.2-134.2-73.6-176.7-8.3-9.9-16.6-19-24.4-27 10.3-2.7 18-12.1 18-23.2 0-13.3-10.7-24-24-24L160 0zM52.7 464l16.6-32h181.6l16.6 32zm207.9-80h-201c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512h238.5c22.5 0 40.8-18.2 40.8-40.8 0-6.5-1.6-12.9-4.6-18.7L289 401.3c-5.5-10.6-16.5-17.3-28.4-17.3'></path>
    </svg>
  )
}

function NavLogo() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <Link href="/dashboard" className="flex space-x-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div className="flex items-center size-4 m-2">
                <Logo />
              </div>
              <div className="flex items-center">
                <span className="truncate font-semibold">
                  OpenSource Yourself
                </span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavLogo

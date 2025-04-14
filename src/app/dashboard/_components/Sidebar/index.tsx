import { Sidebar, SidebarContent, SidebarRail } from "@/app/dashboard/_components/Sidebar/_components/sidebar";

import dataNav from "./dataNav";

import Navlogo from "./_components/nav-logo";
import { NavMain } from "./_components/nav-main";

function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Navlogo />
        <NavMain items={dataNav} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default DashboardSidebar

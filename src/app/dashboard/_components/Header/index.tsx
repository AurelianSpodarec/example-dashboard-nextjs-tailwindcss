import { SidebarTrigger } from "@/app/dashboard/_components/Sidebar/_components/sidebar";

function DashboardHeader() {
  return (
    <header className="flex h-16 border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <SidebarTrigger />
      <div>
        Dashboard Header
      </div>
    </header>
  );
}

export default DashboardHeader

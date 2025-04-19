'use client';

import DashboardHeader from "./_components/Header";
import DashboardSidebar from "./_components/Sidebar";

import {
  SidebarInset,
  SidebarProvider,
} from "@/app/dashboard/_components/Sidebar/_components/sidebar"

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <section className="h-full w-full max-h-screen overflow-auto">
          {children}
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout

'use client';

import DashboardHeader from "./_components/Header";
import DashboardSidebar from "./_components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <main>
        {children}
      </main>
    </>
  )
}

export default DashboardLayout

import Link from "next/link";
import { DashboardRoutes, WebsiteRoutes } from "@/routes";

function DashboardSidebar() {
  return (
    <aside>
      Dashboard Sidebar
      <div className="flex flex-col">
        <Link href={WebsiteRoutes.ROOT} className="underline text-blue-700">Go to Landing Page</Link>
        <Link href={DashboardRoutes.ROOT} className="underline text-blue-700">Dashboard Page: Home</Link>
        <Link href={DashboardRoutes.USERS} className="underline text-blue-700">Dashboard Page: Users</Link>
        <Link href={DashboardRoutes.THEMES} className="underline text-blue-700">Dashboard Page: Themes</Link>
      </div>
    </aside>
  );
}

export default DashboardSidebar

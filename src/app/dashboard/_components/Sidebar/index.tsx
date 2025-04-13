import Link from "next/link";

function DashboardSidebar() {
  return (
    <aside>
      Dashboard Sidebar
      <div className="flex flex-col">
        <Link href="/" className="underline text-blue-700">Go to Landing Page</Link>
        <Link href="/dashboard" className="underline text-blue-700">Dashboard Page: Home</Link>
        <Link href="/dashboard/users" className="underline text-blue-700">Dashboard Page: Users</Link>
        <Link href="/dashboard/themes" className="underline text-blue-700">Dashboard Page: Themes</Link>
      </div>
    </aside>
  );
}

export default DashboardSidebar

import { DashboardRoutes, WebsiteRoutes } from "@/routes";
import Link from "next/link";

function WebHeader() {
  return (
    <div>
      WebHeader
      <div className="flex flex-col">
        <Link href={DashboardRoutes.ROOT} className="underline text-blue-700">Go to Dashboard</Link>
        <Link href={WebsiteRoutes.ROOT} className="underline text-blue-700">Page: Home</Link>
        <Link href={WebsiteRoutes.ABOUT} className="underline text-blue-700">Page: About</Link>
        <Link href={WebsiteRoutes.CONTACT} className="underline text-blue-700">Page: Contact</Link>
      </div>
    </div>
  );
}

export default WebHeader

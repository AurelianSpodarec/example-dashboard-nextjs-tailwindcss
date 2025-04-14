import { DashboardRoutes } from "@/routes";

import {
  Home,
  Package,
  Palette,
  Users
} from "lucide-react"

const dataNav = [
  {
    title: "Home",
    url: DashboardRoutes.ROOT,
    icon: Home,
  },
  {
    title: "Themes",
    url: DashboardRoutes.THEMES,
    icon: Palette,
  },
  {
    title: "Users",
    url: DashboardRoutes.USERS,
    icon: Users,
  },
  {
    title: "Components",
    url: DashboardRoutes.COMPONENTS,
    icon: Package,
  },
]

export default dataNav

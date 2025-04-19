"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./sidebar"

interface IItems {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}

export function NavMain({ items }: IItems) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const hasSubItems = Array.isArray(item.items) && item.items.length > 0
          const isParentActive =
            item.url === pathname ||
            (item.items && item.items.some((sub) => sub.url === pathname))
          return (
            <Collapsible
              key={item.url}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} className={isParentActive ? "bg-muted font-semibold" : ""}>
                    {!hasSubItems && <Link href={item.url} className="absolute inset-0 z-10" />}
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {hasSubItems &&
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    }
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item?.items &&
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const isSubActive = subItem.url === pathname
                        return (
                          <SidebarMenuSubItem key={subItem.url} className={isSubActive ? "bg-muted font-medium" : ""}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                }
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Ticket,
  Mail,
  ClipboardList,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react"

type NavItem = {
  label: string
  icon: typeof LayoutDashboard
  badge?: number
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Tickets", icon: Ticket },
  { label: "E-Mails", icon: Mail, badge: 1 },
  { label: "Aufträge", icon: ClipboardList },
  { label: "Kunden", icon: Users },
  { label: "Berichte", icon: BarChart3 },
  { label: "Einstellungen", icon: Settings },
]

export function Sidebar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          MK
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 pt-2" aria-label="Hauptnavigation">
        {navItems.map((item) => {
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(item.label)}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-sidebar-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge ? (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
                  {item.badge}
                </span>
              ) : null}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-border px-3 py-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-muted"
        >
          <LogOut className="h-[18px] w-[18px]" aria-hidden="true" />
          Ausloggen
        </button>
      </div>
    </aside>
  )
}

import type { LucideIcon } from "lucide-react"
import { Inbox, Clock, Bug, Bell, Mail, Store, OctagonAlert } from "lucide-react"

export type TicketCardData = {
  id: string
  title: string
  badge: string
  count: number
  unit: string
  status: string
  statusTone: "up" | "alert" | "ok" | "warning"
  href: string
  icon: LucideIcon
  /** tailwind-friendly tone key used to color the icon, badge and footer */
  tone: "blue" | "red" | "orange" | "pink" | "purple" | "yellow" | "teal"
}

export const ticketCards: TicketCardData[] = [
  {
    id: "neue",
    title: "Neue Tickets",
    badge: "NEU",
    count: 14,
    unit: "Tickets",
    status: "+12% seit gestern",
    statusTone: "up",
    href: "#",
    icon: Inbox,
    tone: "teal",
  },
  {
    id: "eskaliert",
    title: "Eskalierte Tickets",
    badge: "ESKALIERT",
    count: 3,
    unit: "Tickets",
    status: "2 über SLA",
    statusTone: "alert",
    href: "#",
    icon: OctagonAlert,
    tone: "red",
  },
  {
    id: "aktualisiert",
    title: "Aktualisierte Tickets",
    badge: "AKTUALISIERT",
    count: 0,
    unit: "Tickets",
    status: "Keine Änderungen",
    statusTone: "ok",
    href: "#",
    icon: Clock,
    tone: "orange",
  },
  {
    id: "filialpruefung",
    title: "Filialprüfung",
    badge: "BEWERTUNG",
    count: 0,
    unit: "Tickets",
    status: "Keine offenen Prüfungen",
    statusTone: "ok",
    href: "#",
    icon: Store,
    tone: "pink",
  },
  {
    id: "fehlerhaft",
    title: "Fehlerhafte Tickets",
    badge: "DEFEKT",
    count: 10,
    unit: "Tickets",
    status: "Sofortige Prüfung nötig",
    statusTone: "alert",
    href: "#",
    icon: Bug,
    tone: "purple",
  },
  {
    id: "erinnerungen",
    title: "Ticket Erinnerungen",
    badge: "ABGELAUFEN",
    count: 0,
    unit: "Tickets",
    status: "Keine Erinnerungen",
    statusTone: "ok",
    href: "#",
    icon: Bell,
    tone: "yellow",
  },
  {
    id: "nicht-zugeordnet",
    title: "Nicht zugeordnete E-Mails",
    badge: "NICHT ZUGEORDNET",
    count: 1,
    unit: "EmailItems",
    status: "Bitte zuordnen",
    statusTone: "warning",
    href: "#",
    icon: Mail,
    tone: "teal",
  },
]

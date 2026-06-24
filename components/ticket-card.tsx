import { ArrowRight, CheckCircle2, TrendingUp, AlertCircle } from "lucide-react"
import type { TicketCardData } from "@/lib/dashboard-data"

const toneStyles: Record<
  TicketCardData["tone"],
  { iconBg: string; iconText: string; badge: string; count: string; footer: string }
> = {
  blue: {
    iconBg: "bg-blue-50",
    iconText: "text-blue-500",
    badge: "bg-blue-50 text-blue-600",
    count: "text-blue-600",
    footer: "bg-blue-50/60 text-blue-700",
  },
  red: {
    iconBg: "bg-red-50",
    iconText: "text-red-500",
    badge: "bg-red-50 text-red-600",
    count: "text-red-600",
    footer: "bg-red-50/60 text-red-700",
  },
  orange: {
    iconBg: "bg-orange-50",
    iconText: "text-orange-500",
    badge: "bg-orange-50 text-orange-600",
    count: "text-orange-500",
    footer: "bg-orange-50/60 text-orange-700",
  },
  pink: {
    iconBg: "bg-pink-50",
    iconText: "text-pink-500",
    badge: "bg-pink-50 text-pink-600",
    count: "text-pink-600",
    footer: "bg-pink-50/60 text-pink-700",
  },
  purple: {
    iconBg: "bg-purple-50",
    iconText: "text-purple-500",
    badge: "bg-purple-50 text-purple-600",
    count: "text-purple-600",
    footer: "bg-purple-50/60 text-purple-700",
  },
  yellow: {
    iconBg: "bg-amber-50",
    iconText: "text-amber-500",
    badge: "bg-amber-50 text-amber-600",
    count: "text-amber-500",
    footer: "bg-amber-50/60 text-amber-700",
  },
  teal: {
    iconBg: "bg-teal-50",
    iconText: "text-teal-500",
    badge: "bg-teal-50 text-teal-600",
    count: "text-teal-600",
    footer: "bg-teal-50/60 text-teal-700",
  },
}

const statusToneStyles: Record<TicketCardData["statusTone"], { text: string; Icon: typeof CheckCircle2 }> = {
  up: { text: "text-emerald-600", Icon: TrendingUp },
  ok: { text: "text-emerald-600", Icon: CheckCircle2 },
  alert: { text: "text-red-600", Icon: AlertCircle },
  warning: { text: "text-amber-600", Icon: AlertCircle },
}

export function TicketCard({ card }: { card: TicketCardData }) {
  const tone = toneStyles[card.tone]
  const status = statusToneStyles[card.statusTone]
  const Icon = card.icon
  const StatusIcon = status.Icon

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4 p-5">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${tone.iconBg}`}>
          <Icon className={`h-6 w-6 ${tone.iconText}`} aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-semibold text-foreground">{card.title}</h2>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide ${tone.badge}`}
            >
              {card.badge}
            </span>
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className={`text-3xl font-bold ${tone.count}`}>{card.count}</span>
            <span className="text-sm text-muted-foreground">{card.unit}</span>
          </div>

          <p className={`mt-2 flex items-center gap-1.5 text-xs font-medium ${status.text}`}>
            <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {card.status}
          </p>
        </div>
      </div>

      <a
        href={card.href}
        className={`mt-auto flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors ${tone.footer}`}
      >
        Ansehen &amp; bearbeiten
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  )
}

import { Sparkles } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { TicketCard } from "@/components/ticket-card"
import { ticketCards } from "@/lib/dashboard-data"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <DashboardHeader />

          <section className="mt-6 flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Hier finden Sie eine Übersicht Ihrer Ticket-Aktivitäten.
              </p>
              <p className="text-sm text-muted-foreground">
                Klicken Sie auf eine Kategorie, um direkt loszulegen.
              </p>
            </div>
          </section>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ticketCards.map((card) => (
              <TicketCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

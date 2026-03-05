import { CountdownTimer } from "@/components/countdown-timer"
import { CharacterShowcase } from "@/components/character-showcase"
import { Logo } from "@/components/logo"
import { Mail } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Subtle radial ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        aria-hidden="true"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center top, hsl(340 82% 52% / 0.06), transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex w-full items-center justify-between px-6 py-6 sm:px-10 md:px-16">
        <Logo />
        <nav aria-label="Social links">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="sr-only">{"Follow us on X"}</span>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-12 pt-4">
        {/* Tagline badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {"Launching Soon"}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="mb-3 text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {"Something "}
          <span className="text-primary">{"interesting"}</span>
          {" awaits."}
        </h1>

        <p className="mb-10 max-w-lg text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-12">
          {"Your next favorite anime characters are coming to life. Get ready for an experience unlike any other."}
        </p>

        {/* Countdown Timer */}
        <div className="mb-14 md:mb-16">
          <CountdownTimer />
        </div>

        {/* Character Showcase */}
        <CharacterShowcase />

        {/* Notify CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 md:mt-16">
          <p className="text-sm text-muted-foreground">
            {"Be the first to know when we launch"}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
              <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for launch notification"
                className="w-48 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none sm:w-64"
              />
            </div>
            <button
              type="button"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
            >
              {"Notify Me"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex w-full items-center justify-center border-t border-border px-6 py-6">
        <p className="text-xs text-muted-foreground">
          {"2026 XtraToon. All rights reserved."}
        </p>
      </footer>

      {/* Bottom ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center bottom, hsl(340 82% 52% / 0.04), transparent 70%)",
        }}
      />
    </div>
  )
}

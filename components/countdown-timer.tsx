"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function TimerUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-border bg-card sm:h-24 sm:w-24 md:h-28 md:w-28">
        <span className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute -bottom-px left-2 right-2 h-px bg-primary/30" />
      </div>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer() {
  const targetDate = new Date("2026-06-15T00:00:00")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <TimerUnit key={label} value={0} label={label} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
      <TimerUnit value={timeLeft.days} label="Days" />
      <div className="flex flex-col gap-3 self-start pt-6 sm:pt-7 md:pt-8">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
      <TimerUnit value={timeLeft.hours} label="Hours" />
      <div className="flex flex-col gap-3 self-start pt-6 sm:pt-7 md:pt-8">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
      <TimerUnit value={timeLeft.minutes} label="Minutes" />
      <div className="flex flex-col gap-3 self-start pt-6 sm:pt-7 md:pt-8">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
      <TimerUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

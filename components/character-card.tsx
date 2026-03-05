"use client"

import Image from "next/image"
import { useState } from "react"

interface CharacterCardProps {
  src: string
  alt: string
  name: string
  className?: string
  priority?: boolean
}

export function CharacterCard({
  src,
  alt,
  name,
  className = "",
  priority = false,
}: CharacterCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative flex flex-col items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind character */}
      <div
        className="absolute bottom-0 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 sm:h-40 sm:w-64"
        style={{
          background:
            "radial-gradient(ellipse, hsl(340 82% 52% / 0.3), transparent)",
        }}
      />

      {/* Character image */}
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? "translateY(-8px) scale(1.03)" : "none",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={320}
          height={420}
          priority={priority}
          className="h-auto w-44 object-contain sm:w-56 md:w-64 lg:w-72"
        />
      </div>

      {/* Character name label */}
      <div className="mt-3 overflow-hidden">
        <p
          className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500 group-hover:tracking-[0.4em] group-hover:text-primary"
        >
          {name}
        </p>
      </div>
    </div>
  )
}

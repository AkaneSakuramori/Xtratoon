import { CharacterCard } from "./character-card"

const characters = [
  {
    src: "/images/character-1.jpg",
    alt: "Silver-haired swordswoman anime character in a dark futuristic outfit",
    name: "Crimson Blade",
  },
  {
    src: "/images/character-2.jpg",
    alt: "Dark-haired mage anime character with a glowing staff and elegant dress",
    name: "Arcane Enchantress",
  },
  {
    src: "/images/character-3.jpg",
    alt: "Pink-haired catgirl anime character in modern streetwear",
    name: "Neon Whisker",
  },
]

export function CharacterShowcase() {
  return (
    <section className="relative w-full">
      {/* Subtle horizontal line accent */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-border/40" />

      <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4 lg:gap-12">
        {characters.map((character, i) => (
          <CharacterCard
            key={character.name}
            src={character.src}
            alt={character.alt}
            name={character.name}
            priority={i === 1}
            className={
              i === 1
                ? "z-10 md:scale-110 md:-translate-y-4"
                : "md:opacity-90 md:hover:opacity-100"
            }
          />
        ))}
      </div>
    </section>
  )
}

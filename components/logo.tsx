export function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Stylized X mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        aria-hidden="true"
      >
        <path
          d="M8 8L24 24M24 8L8 24"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight text-foreground">
        {"Xtra"}
        <span className="text-primary">{"Toon"}</span>
      </span>
    </div>
  )
}

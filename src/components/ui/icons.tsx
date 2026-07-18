import type { SVGProps } from 'react'

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.255c-3.338.726-4.037-1.609-4.037-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.493.998.107-.775.419-1.304.762-1.604-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.467-2.381 1.235-3.222-.123-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.304 1.229.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.005.404 2.292-1.551 3.297-1.229 3.297-1.229.656 1.652.244 2.873.122 3.176.77.841 1.232 1.912 1.232 3.222 0 4.61-2.807 5.624-5.479 5.92.431.371.815 1.102.815 2.222v3.293c0 .321.192.694.801.576C20.566 21.794 24 17.304 24 12 24 5.373 18.627 0 12 0z" />
    </svg>
  )
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.453c.978 0 1.776-.774 1.776-1.729V1.729C24 .774 23.203 0 22.225 0zM7.077 20.452H3.554V9.015h3.523v11.437zm-1.762-13.03c-1.122 0-1.963-.876-1.963-1.96 0-1.085.841-1.961 1.963-1.961 1.122 0 1.963.876 1.963 1.96 0 1.085-.841 1.961-1.963 1.961zm15.173 13.03h-3.523v-5.875c0-1.4-.027-3.198-1.945-3.198-1.946 0-2.245 1.517-2.245 3.092v5.981h-3.523V9.015h3.382v1.561h.048c.47-.89 1.618-1.83 3.335-1.83 3.564 0 4.218 2.345 4.218 5.396v6.31z" />
    </svg>
  )
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2.5 12h2M19.5 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
  )
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.273c-4.508 0-8.166-3.658-8.166-8.166 0-1.202.26-2.343.727-3.371a10.083 10.083 0 1 0 9.516 11.264z" />
    </svg>
  )
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m20 20-3.2-3.2" />
    </svg>
  )
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path strokeLinecap="round" d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  )
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path strokeLinecap="round" d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

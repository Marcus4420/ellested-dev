import { useState } from 'react'

interface CopyEmailProps {
  email: string
  label?: string
  copiedLabel?: string
  className?: string
}

export default function CopyEmail({ email, label, copiedLabel = 'Copied!', className = '' }: CopyEmailProps) {
  const [copied, setCopied] = useState(false)

  async function handleClick() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {copied ? copiedLabel : (label ?? email)}
    </button>
  )
}

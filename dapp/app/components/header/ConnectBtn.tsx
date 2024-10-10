'use client'

import { ConnectKitButton } from 'connectkit'
import { useTheme } from 'next-themes'

export default function ConnectBtn() {
  const { theme } = useTheme()
  const mode = theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : 'auto'
  return (
    <div>
      <ConnectKitButton mode={mode} showBalance showAvatar={false} />
    </div>
  )
}

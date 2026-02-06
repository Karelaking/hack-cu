import React from 'react'
import { ThemeProvider } from './theme-provider'

interface RootProviderProps {
  children?: React.ReactNode
}

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="w-full min-h-dvh bg-background text-foreground flex flex-col items-center">
        {children}
      </main>
    </ThemeProvider>
  )
}

export default RootProvider
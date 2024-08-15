import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'
import { ThemeProvider } from "@/providers/theme-provider"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <main className="h-full">
                <Navigation />
                {children}
            </main>
        </ClerkProvider>
        </ThemeProvider>
    )
}

export default layout
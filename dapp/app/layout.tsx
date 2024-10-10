import type { Metadata } from 'next'
import './globals.css'
import Web3Provider from './components/web3/Web3Provider'
import { ThemeProvider } from './components/common/theme-provider'
import Header from './components/header/Header'

export const metadata: Metadata = {
  title: 'Ladybug',
  description: 'Ladybug',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Web3Provider>
            <Header></Header>
            {children}
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import CartProvider from '@/context/cartContext'
import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Shop',
  description: 'Online store made by emerly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CartProvider>
        <body className='flex flex-col bg-[--primary-color]'>
          <Header />
          <main className='flex-grow'>
            {children}
          </main>
          {/* <Footer /> */}
        </body>
      </CartProvider>
    </html>
  )
}

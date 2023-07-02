// import '../styles/globals.css'
import '../styles/main.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "tanuj's portfolio ",
  description: 'hey there, i am tanuj and this is my portfolio!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='container'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

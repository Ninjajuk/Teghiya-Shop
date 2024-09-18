'use client'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from './Components/Footer'
import StoreProvider from './StoreProvider'
import { useState } from 'react'
import style from './module.style.css'
import Navbar1 from './Components/Navbar/Navbar3Dark'


const inter = Inter({ subsets: ['latin'] })

  const metadata = {
  title: 'Teghiya Store',
  description: 'Ecom Store located in Bheraukhara',
}

export default function RootLayout({ children }) {


  const [isLoggedIn, setIsLoggedIn] = useState(true);
  

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   setIsLoggedIn(false);
  // };

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        {isLoggedIn && <Navbar1/>}

        {children}
        <Footer/>
        </StoreProvider>
   
        </body>
    </html>
  )
}

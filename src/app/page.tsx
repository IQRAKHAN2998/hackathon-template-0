// import React, { Suspense } from 'react'
import Home from './widgets/home'
import Products from './widgets/product'
import { AsgardSofa } from './widgets/asgardsofa'
// import { ClerkProvider, UserButton } from '@clerk/nextjs'
// import Header from './layout/header'
// import Account from './myaccount/page'



const HomePage = () => {
  return (
    <main>
   
      <Home />
      <Products />
      <AsgardSofa />


    </main>
  )
}
export default HomePage

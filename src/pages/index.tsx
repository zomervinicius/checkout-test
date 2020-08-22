import Cart from '@/components/Cart'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import React from 'react'

const Home: React.FC<{}> = () => (
  <div>
    <Header />
    <Menu />
    <Cart />
  </div>
)

export default Home

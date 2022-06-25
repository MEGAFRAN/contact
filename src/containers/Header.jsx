import React from 'react'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'

const Header = () => {
  return (
    <nav className="container-nav">
        <Logo/>
        <Heading/>
        <div>

        </div>
    </nav>
  )
}

export { Header };
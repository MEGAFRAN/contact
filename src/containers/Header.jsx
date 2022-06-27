import React from 'react';
import { Heading } from '../components/Heading';
import { Logo } from '../components/Logo';
import styles from '../styles/containers/Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo}/>
          <div>

          </div>

        </div>
        <Heading/>
    </nav>
  )
}

export { Header };
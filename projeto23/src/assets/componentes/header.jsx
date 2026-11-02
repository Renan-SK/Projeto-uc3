
import styles from './css/header.module.css'
import { Link } from 'react-router-dom'

import Logo from './imagem/logo.png'

function Header() {
  return (
    <header>
      <div className={styles.ajuste}>
        <div className={styles.caixa_img}>
          <img src={Logo} alt="" />
        </div>
        <nav>
          <div className={styles.nav_ajuste}>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
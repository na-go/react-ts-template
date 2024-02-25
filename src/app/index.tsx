import { memo } from 'react'

import * as styles from './styles.css'

const App = () => {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Vite App.</h1>
      </main>
    </div>
  )
}

export default memo(App)

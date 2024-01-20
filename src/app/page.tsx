import Homelogin from './components/loginbutton'
import styles from './page.module.css'
export default function Home() {
  return (
    <main>
      <h2 className={styles.startingh2}>Starting Page of player 2 to check updated Pocket PG</h2>
      <Homelogin />
    </main>
  )
}

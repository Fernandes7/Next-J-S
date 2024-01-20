import Homelogin from './components/loginbutton'
import styles from './page.module.css'
export default function Home() {
  return (
    <main>
      <h2 className={styles.startingh2}>Starting Page of Pocket PG</h2>
      <Homelogin />
    </main>
  )
}

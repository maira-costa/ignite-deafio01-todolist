import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Tasks />
      </main>
    </div>
  )
}

export default App

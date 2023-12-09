import styles from './App.module.css'
import Display from './components/Display'

const App = () => {
  return (
    <div className={styles.calculator}>
      <Display />
    </div>
  )
}

export default App
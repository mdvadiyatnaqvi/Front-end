import React from 'react'
import Heading from './components/Heading'
import Input from './components/Input'
import ItemContainer from './components/ItemContainer'
import styles from "./App.module.css"

const App = () => {
  let data = ["Exercise", "Go to College"]
  return (
    <div className={styles.main}>
      <Heading />
      <Input />
      <ItemContainer data={data}/>
    </div>
  )
}

export default App
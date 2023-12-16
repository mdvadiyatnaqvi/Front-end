import React from 'react'
import styles from './ItemContainer.module.css'

const ItemContainer = ({ data }) => {
    return (
        <div className={styles.main}>
            {data.map((item, index) => (
                <div className={styles.items}>
                    <div key={index}>{item}</div>
                    <button className={styles.btns}>Delete</button>
                </div>
            ))}
        </div>
  )
}

export default ItemContainer
import React from 'react'
import styles from './ButtonItem.module.css'

const ButtonItem = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <button key={item} className={styles.btn}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default ButtonItem
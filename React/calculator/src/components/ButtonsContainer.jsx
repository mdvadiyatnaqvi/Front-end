import ButtonItem from "./ButtonItem";
import styles from './ButtonsContainer.module.css';

const ButtonsContainer = () => {
    let items = ["C", "Del", "/", "1", "2", "*", "3", "4", "+", "5", "6", "-", "7", "8", ".", "9", "0", "="]
    return (
        <div className={styles.container}>
            <ButtonItem key={Math.random()} items={items} />
        </div>
    )
}

export default ButtonsContainer
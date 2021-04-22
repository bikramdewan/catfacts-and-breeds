import styles from './FactCard.module.scss';

function FactCard({fact}) {
    return (
        <div className={styles.FactCard}>
            <div className={styles.FactCard_Text}>
                <div className={styles.FactCard_Text}>{fact.fact}</div>
            </div>
        </div>
    )
}

export default FactCard;
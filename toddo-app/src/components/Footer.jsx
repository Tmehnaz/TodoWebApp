import styles from "./footer.module.css"
export default function Footer({completedCount, totalCount}){
    return (
        <div className={styles.footer}>
            <span>
                Completed Todos : {completedCount}
            </span> 
            <br/>
            <span>
                Total number of Todos: {totalCount}
            </span>
        </div>
    )
}
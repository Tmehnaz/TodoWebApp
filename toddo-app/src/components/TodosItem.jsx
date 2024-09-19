import styles from "./todoitem.module.css"
export default function TodosItem({item,todos,setTodos}){
    function handleDelete(item){
        console.log("Button was deleted", item);
        setTodos(todos.filter((todo)=> todo !== item));
    }
    function handleClick(name){
        //  console.log("Th item is clicked", item);
         const newArray = todos.map((todo)=>todo.name === name ?{...todo, done:!todo.done}:todo);
         setTodos(newArray);
         console.log(todos)
    }
        const className = item.done ? styles.completed:"";
    return(
        <div className={styles.itemName}>
            <div className={styles.itemContainer}>
                <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
                
                <span>
                    <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>
                        X
                    </button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}
import styles from "./todolist.module.css"
import TodosItem from "./TodosItem";
export default function TodoList({todos, setTodos}){
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    return(
        <div className={styles.listContainer}>
            {sortedTodos.map((item)=>(
                <TodosItem key={item.name} item={item} todos={todos} setTodos= {setTodos}/>
            ))}
            
        </div>
    );
}
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import styles from './styles/TodoWrapper.module.css'
import { generateId } from '../utils'
import Todos from './Todos'

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (todo) => {
    const newTodo = {
      todo,
      id: generateId(),
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((item) => item.id !== id))

  const deleteAll = () => setTodos([])

  

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO LIST</h1>

      <TodoForm addTodo={addTodoHandler} onDeleteTodo={deleteAll} />

      {todos.length === 0 ? (
        <div className={styles.no_todos_text}>empty</div>
      ) : (
        <Todos className={styles.list_container}>
          <TodoList onDeleteTodo={deleteTodoHandler} todos={todos} />
        </Todos>
      )}
    </div>
  )
}

export default TodoWrapper

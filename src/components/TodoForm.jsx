import { useState } from 'react'
import styles from './styles/TodoForm.module.css'

const TodoForm = ({ addTodo, onDeleteTodo, onCheckedTodoAll }) => {
  const [value, setValue] = useState('')
  const [errorText, setErrorText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (value.trim() === '') {
      setErrorText('Поле не должно быть пустым!')
    } else {
      addTodo(value)
      setValue('')
      setErrorText('')
    }
  }

  return (
    <div className={styles.form_container}>
      <form className={styles.from} onSubmit={submitHandler}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter new todo"
        />

        <button className={styles.button} type="submit">
          Add Task
        </button>

        {errorText && <p className={styles.error}>{errorText}</p>}
      </form>
      <button className={styles.button1} onClick={() => onDeleteTodo()}>
        Delete All
      </button>
 
    </div>
  )
}

export default TodoForm

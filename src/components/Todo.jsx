import { MdDelete } from 'react-icons/md'
import styles from './styles/Todo.module.css'
import { useState } from 'react';

const Todo = ({ todo, onDeleteTodo }) => {
  const [isChecked, setIsChecked] = useState(false); // состояние для флажка

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // переключаем флажок
  };

  return (
    <div className={styles.todo}>
      <p className={isChecked ? styles.textCompleted : styles.text}>{todo.todo}</p>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <MdDelete
        className={styles.delete}
        onClick={() => onDeleteTodo(todo.id)}
      />
    </div>
  )
}

export default Todo

import Todo from './Todo'

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <>
      {todos?.map((todo) => (
        <Todo onDeleteTodo={onDeleteTodo} key={todo.id} todo={todo} />
      ))}
    </>
  )
}



 

export default TodoList

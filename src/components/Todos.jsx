import PropTypes from 'prop-types'
import styles from './styles/Todos.module.css'

const Todos = ({ children }) => {
  return <div className={styles.list_container}>{children}</div>
}



export default Todos

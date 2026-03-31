import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <h2>Welcome To My App</h2>
      <Link to={'/react-practice/counter'}>Counter</Link>
      <Link to={'/react-practice/todo-list'}>Todo List</Link>
      <Link to={'/react-practice/productStore'}>Store</Link>
      {/* <a href="./counter">counter</a> */}
    </>
  )
}

export default App

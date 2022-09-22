import Head from 'next/head' 
import { useState } from 'react'
import { TodoList } from '../components/TodoList'
import { NewTodoList } from '../components/NewTodoList'
import { Todo } from './todo.models'

const Home: React.FC<Todo> = () => {

  const [ todoList, setTodoList] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    setTodoList(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: text}
    ])
  }

  const checkHandler = (todoId: string) => {
    setTodoList(prevTodos => {
       return prevTodos.filter(todos => todos.id !== todoId)
    })
 }

  return (
    <>
      <Head>
        <title>titulo</title>
      </Head>
        <h1>To-do List</h1>
        <NewTodoList addTodoHandler={addTodoHandler} />
        <TodoList items={todoList} deleteItems={checkHandler} />
    </>
  )
}

export default Home

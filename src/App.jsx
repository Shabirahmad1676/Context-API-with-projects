// import { useState } from 'react'
// import ContextProvider from './context/ContextProvider'
// import LogIn from './components/LogIn'
// import Profile from './components/Profile'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <ContextProvider>
//     <LogIn/>
//     <Profile/>
//     </ContextProvider>
//     </>
//   )
// }

// export default App



//Theme Chaanger

// import React, { useState } from 'react'
// import { createContext } from 'react'
// import Theme from './components/Theme'

// const ThemeContext = createContext()

// const App = () => {
//   const [theme, setTheme] = useState('light')
//   return (
//     <>
//     <ThemeContext.Provider value={{theme,setTheme}}>
//      <div style={{backgroundColor:theme==='light'?'white':'black'}}>
//      <Theme/>
//      </div>
//     </ThemeContext.Provider>
//     </>
//   )
// }

// export default App
// export {ThemeContext}


//third one with localstorage
import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import Todoitem from './components/Todoitem'


const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]) //here a new todo added above the old todos
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id!== id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo) )
  }

  useEffect(()=>{
   const todos =  JSON.parse(localStorage.getItem("todos"))

   if(todos && todos.length){
    setTodos(todos)
   }

  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (  
   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} >
    <div className="bg-[#2f64b4] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                                <Todoitem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
  )
}

export default App
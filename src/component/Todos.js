import React , {useState } from 'react'
import TodosItem from './TodosItem'
import '../todos.scss'

function Todos() {
    const [Todos , setTodo] = useState([{id:1,title:'readbook'} ,{id:2,title:'programming site'} ,{id:3,title:'danccing'} ])
    const [inputVal , setInputVal] = useState("")

    const handelChange = (e) =>{
        setInputVal(e.target.value)
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        let newItem = {
            id : Math.random() + 1,
            title : inputVal
        }

        setTodo([...Todos , newItem])
        setInputVal('')
    }

    const deletTodo = (id)=>{
        setTodo(Todos.filter(item => item.id !== id))
    }

    return (
        <div className="todolist">
        <form onSubmit={(e)=>handelSubmit(e)} className="form">
            <input type="text"
            value={inputVal}
            onChange={handelChange}
            />
            <button type="submit">Submit</button>
        </form>
             {Todos.map((todo)=> (<TodosItem title={todo.title} id={todo.id} key={todo.id} delet={(id)=>deletTodo(id)}/>))}
        </div>
    )
}

export default Todos

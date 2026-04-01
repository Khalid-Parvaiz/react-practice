import { useState } from "react";

export default function TodoApp() {
    const [inputValue, setInputValue] = useState<string>('')
    const [todos, setTodos] = useState<string[]>([])
    const [editIndex , setEditIndex] = useState<number | null>(null)

    const addTodo = () => {
        if (inputValue.trim() === "") return
        if (editIndex !== null) {
            const updatedTodos = [...todos]
            updatedTodos[editIndex] = inputValue
            setTodos(updatedTodos)
            setEditIndex(null)
        } else {
            setTodos([...todos, inputValue])
        }
        setInputValue("")
    }
    const updateTodos = (todo:string,index:number) => {
        setInputValue(todo)
        setEditIndex(index)
    }
    const deleteTodos = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }
    return (

        <>
            <div className="container" style={{width: 500}}>
                <h1>ToDo List</h1>
                <input style={{ paddingLeft: 10 }} type="text" value={inputValue} placeholder="Enter everything"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setInputValue(e.target.value)
                    }} />
                <button onClick={addTodo}>ADD</button>
                <ul style={{ padding: 0 }}>{todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <div className="btn">
                            <button onClick={() => updateTodos(todo,index)} className="text-sm">Update</button>
                            <button onClick={() => deleteTodos(index)} className="text-sm">Delete</button>
                        </div>
                    </li>

                ))}</ul>
            </div>
        </>

    )
}
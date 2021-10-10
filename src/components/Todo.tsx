import axios from "axios"

interface TodoInterface{
    checked: boolean
    title: string
}

function Todo({ checked, title }: TodoInterface){
    async function deleteTodo(){
        const todoName = document.querySelector('p')?.innerText
        await axios.delete(`/api/todos`, { params: { tname: todoName } })

        window.location.reload()
    }

    async function changeDone(){
        const todoName = document.querySelector('p')?.innerText
        await axios.put(`/api/todos`, { params: { tname: todoName } })

        window.location.reload()
    }

    return(
        <div className="todo">
            <li style={checked === true ? {textDecoration: "lineThrough"} : {textDecoration: "none"}}>{title}</li>
            <a onClick={deleteTodo} style={{marginLeft: 10, cursor: 'pointer', fontFamily: 'Poppins'}}>Delete</a>
        </div>
    )
}

export { Todo }
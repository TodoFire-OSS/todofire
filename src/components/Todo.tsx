import axios from "axios"
import useSWR, { useSWRConfig } from 'swr'

import { useSession, signIn, signOut } from 'next-auth/client'
interface TodoInterface{
    checked: boolean
    title: string
    id: any
}

function Todo({ checked, title, id }: TodoInterface){
    const { mutate } = useSWRConfig()
    const [session] = useSession()
    async function deleteTodo(id: any){
        // const todoName = document.querySelector('li')?.innerText
        // console.log(id)
        // console.log(document.querySelector('li'))
        await axios.delete(`/api/todos`, { params: { tid: id } }).then((res) => {
            if (res.status == 200) {
                mutate(`/api/todos/${session?.user?.email}`)
                return ("Okkk")
            }
        })

        // window.location.reload()
    }

    return(
        <div key="todo" className="todo">
            <li style={checked === true ? {textDecoration: "lineThrough"} : {textDecoration: "none"}}>{title}</li>
            <a onClick={() => deleteTodo(id)} style={{marginLeft: 10, cursor: 'pointer', fontFamily: 'Poppins'}}>Delete</a>
        </div>
    )
}

export { Todo }
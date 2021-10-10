import { BottomButton } from "../components/BottomButton"
import { RightButton } from "../components/RightButton"
import { Todo } from "../components/Todo"

import { useSession, signIn, signOut } from 'next-auth/client'

import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function Main(){
    const [session] = useSession()

    const getTodos = () => {
        const { data } = useSWR(`/api/todos/${session?.user?.email}`, fetcher)

        console.log(data)

        if(!data){
            return(
                <div>Loading...</div>
            )
        }

        if(data != undefined){
            return(
                data.map((todo: any) => (
                    <div id="todos">
                        <Todo title={todo.tname} checked={todo.done} />
                    </div>
                ))
            )
        }else{
            return(
                <p>Error on loading todos</p>
            )
        }
    }

    const postTodo = async () => {
        const tname = window.prompt('Todo name:')

        await axios.post(`/api/todos`, { tname, uemail: session?.user?.email })

        window.location.reload()
    }

    return(
        <>
            <header>
                <img src="fire.png" alt="TodoFire" />
                { session && <img onClick={() => signOut()} id="user-icon" src={session.user?.image!} alt="User" /> }
                { !session && <img onClick={() => signIn()} id="user-icon" src="unknown-user.png" alt="User" /> }
            </header>

            <main>
                <div id="todos-top">
                    <h1>All your todos</h1>
                    <button onClick={postTodo}>Create new</button>
                </div>
                
                { session ? getTodos() : ( <h1>Not logged in</h1> ) }

            </main>

            <div id="right-panel">
                <div id="right-buttons">
                    <RightButton imgSrc="home.svg" />
                    <RightButton imgSrc="search.svg" />
                </div>
            </div>

            <div id="bottom-panel">
                <div id="bottom-buttons">
                    <BottomButton imgSrc="home.svg" btnTitle="Home" />
                    <BottomButton imgSrc="search.svg" btnTitle="Search" />
                </div>
            </div>
        </>
    )
}

export default Main
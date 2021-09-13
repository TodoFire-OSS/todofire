import { BottomButton } from "../components/BottomButton"
import { RightButton } from "../components/RightButton"

import { useSession, signIn, signOut } from 'next-auth/client'

function Main(){
    const [session] = useSession()

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
                    <button>Create new</button>
                </div>
                
                <div id="todos">
                    <div id="todo">
                        <div id="done-mark" />
                        <p>Wash the house</p>
                    </div>
                </div>
            </main>

            <div id="right-panel">
                <div id="right-buttons">
                    <RightButton imgSrc="home.svg" />
                    <RightButton imgSrc="done.svg" />
                    <RightButton imgSrc="search.svg" />
                </div>
            </div>

            <div id="bottom-panel">
                <div id="bottom-buttons">
                    <BottomButton imgSrc="home.svg" btnTitle="Home" />
                    <BottomButton imgSrc="done.svg" btnTitle="Done" />
                    <BottomButton imgSrc="search.svg" btnTitle="Search" />
                </div>
            </div>
        </>
    )
}

export default Main
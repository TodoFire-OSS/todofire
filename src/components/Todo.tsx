interface TodoInterface{
    checked: boolean
    title: string
}

function Todo({ checked, title }: TodoInterface){

    return(
        <div className="todo">
            {/* <div id="done-mark" /> */}
            <input type="checkbox" className="done-mark" defaultChecked={checked}/>
            <p style={checked === true ? {textDecoration: "lineThrough"} : {textDecoration: "none"}}>{title}</p>
        </div>
    )
}

export { Todo }
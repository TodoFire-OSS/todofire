interface BottomButtonInterface{
    imgSrc: string
}

function RightButton({ imgSrc }: BottomButtonInterface){
    return(
        <div id="right-button">
            <img src={imgSrc} />
        </div>
    )
}

export { RightButton }
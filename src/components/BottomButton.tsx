interface BottomButtonInterface{
    imgSrc: string
    btnTitle: string
}

function BottomButton({ imgSrc, btnTitle }: BottomButtonInterface){
    return(
        <div id="bottom-button">
            <img src={imgSrc} alt={btnTitle} />
            <p>{btnTitle}</p>
        </div>
    )
}

export { BottomButton }
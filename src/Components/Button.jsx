export function Button({text, color}){
    return(
        <>
        <div>
            <button className={`text-xs font-semibold px-4 py-2 rounded-2xl ${color == 'black' ? 'buttonBlack' : 'buttonGrey'}`}>{text}</button>
        </div>
        </>
    )
}
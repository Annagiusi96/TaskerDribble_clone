import { changeColor } from "../utilities/changeColor";

export function ButtonCard({activity, text}){

    return (
        <>
        <div>
            <button className={`text-white text-sm px-4 py-1 rounded-2xl rounded-r-none ${changeColor(activity)}`}>{text}</button>
        </div>
        </>
    )
}
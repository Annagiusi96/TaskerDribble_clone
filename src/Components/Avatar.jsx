export function Avatar({ avatar }) {
    return (
        <>
            <div className="grigio w-14 h-14 rounded-full">
                <img src={avatar} className="w-full h-full object-cover rounded-full"></img>
            </div>
        </>
    )
}
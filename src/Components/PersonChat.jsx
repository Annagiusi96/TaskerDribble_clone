export function PersonChat({ name, time }) {
    return (
        <>
            <div className="flex justify-between w-full items-center">
                <h4 className="text-black font-bold text-sm">{name}</h4>
                <p className="text-xs text-black font-semibold fontSizeChat">{time}</p>
            </div>
        </>
    )
}
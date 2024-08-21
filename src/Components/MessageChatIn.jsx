export function MessageChatIn({text, hour}) {
    return (
        <>
            <div className="flex py-2">
                <p className="text-slate-700 text-xs bg-white rounded-xl p-2">{text}</p>
                <p className="text-slate-400 fontSizeChat">{hour}</p>
            </div>
        </>
    )
}
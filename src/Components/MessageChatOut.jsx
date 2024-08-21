export function MessageChatOut({ text, hour }) {
    return (
        <>
            <div className="flex items-center justify-end w-full pt-4">
                <ion-icon name="checkmark-done-outline" style={{ color: 'green' }}></ion-icon>
                <p className="text-slate-700 text-xs bg-green-50 rounded-xl p-2">{text}</p>
                <p className="text-slate-400 fontSizeChat">{hour}</p>
            </div>
        </>
    )
}
import { Avatar } from "./Avatar";

export function InputChat({ avatar }) {
    return (
        <>
            <div className="flex items-center justify-center gap-3 py-2">
                <div className="bg-white rounded-full flex items-center">
                    <Avatar avatar={avatar} />
                </div>
                <div className="flex bg-white rounded-3xl h-8">
                    <input type="text" className="bg-transparent" />
                    <button className="bg-black rounded-full flex items-center"><ion-icon name="paper-plane-outline" style={{ color: 'white', padding: 8 }}></ion-icon></button>
                </div>
            </div>
        </>
    )
}
import { Avatar } from "./Avatar"

export function Avatars() {
    const avatar = [
        "src/assets/3d-rendering-zoom-call-avatar__1_-removebg-preview.png",
        "src/assets/3d-rendering-zoom-call-avatar__2_-removebg-preview.png",
        "src/assets/3d-rendering-zoom-call-avatar-removebg-preview.png",
        "src/assets/3d-rendering-zoom-call-avatar__1_-removebg-preview.png",
    ]
    return (
        <>
            <div className="flex gap-2">
                {
                    avatar.map((img, index) => (
                        <div key={index}>
                            <Avatar avatar={img}/>
                        </div>
                    ))
                }
                <div className=" flex items-center ">
                    <p className="text-black font-semibold grigio rounded-full p-3 text-lg">+10</p>
                </div>
            </div>
        </>
    )
}
import { Account } from "./Account"
import { Avatar } from "./Avatar"
import { IconLightDarkMode } from "./IconLightDarkMode"
import { IconNotification } from "./IconNotification"
import { IconSettings } from "./IconSettings"
import { Logo } from "./Logo"
import { SearchBar } from "./SearchBar"

export function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 widthNav ">
                <Logo logo={"src/assets/photo_5920270289487381595_x.jpg"} />
                <div className="flex justify-between items-center w-3/4 gap-3">
                    <SearchBar />
                    <div className="flex gap-4 items-center">
                        <IconNotification />
                        <IconSettings />
                        <div className="grigio flex rounded-full">
                            <IconLightDarkMode />
                        </div>
                    </div>
                    <div className="grigio flex items-center w-10 h-10 rounded-full">
                        <img src="src/assets/3d-rendering-zoom-call-avatar-removebg-preview.png" className="w-full h-full object-cover rounded-full"></img>
                    </div>
                    <Account name={"Darina"} job={"UI/UX designer"} />
                </div>
            </nav >
        </>
    )
}
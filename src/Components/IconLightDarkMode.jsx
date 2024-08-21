import { useState } from "react"

export function IconLightDarkMode() {

    const [isActive, setIsActive] = useState(true);

    function handleClick(isActive) {
        setIsActive(isActive)
    }
    
    return (
        <>
            <a href="#" className={`${isActive ? "iconNavbarToggleActive" : "iconNavbarToggleInactive"}`} onClick={()=>handleClick(true)}>
                <ion-icon name="sunny-outline"></ion-icon>
            </a>
            <a href="#" className={`${!isActive ? "iconNavbarToggleActive" : "iconNavbarToggleInactive"}`} onClick={()=>handleClick(false)}>
                <ion-icon name="moon-outline"></ion-icon>
            </a>
        </>
    )
}
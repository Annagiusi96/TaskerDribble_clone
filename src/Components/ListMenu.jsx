export function ListMenu() {
    const dataMenu = [
        { icon: <ion-icon name="home-outline"></ion-icon>, text: "Dashboard", notification: null, link: "#", selected: true },
        { icon: <ion-icon name="chatbox-ellipses-outline"></ion-icon>, text: "Messages", notification: "+4", link: "#", selected: false },
        { icon: <ion-icon name="reader-outline"></ion-icon>, text: "My tasks", notification: "+1", link: "#", selected: false },
        { icon: <ion-icon name="people-outline"></ion-icon>, text: "Friends", notification: null, link: "#", selected: false },
        { icon: <ion-icon name="calendar-outline"></ion-icon>, text: "Calendar", notification: null, link: "#", selected: false },
    ]

    function isSelected(value) {
        if (value) {
            return "black"
        }
    }

    return (
        <ul className="flex flex-col gap-6">
            {dataMenu.map((el, index) => (
                <li key={index} className="flex justify-between w-full items-center">
                    <div className={`flex gap-2 items-center w-full ${isSelected(el.selected)} p-2`}>
                        {el.icon}
                        <a href={el.link} className={`text-sm font-semibold ${isSelected(el.selected) ? 'text-white' : 'text-slate-500'}`}>
                            {el.text}
                        </a>
                    </div>
                    <div>
                        {el.notification != null && (
                            <div>
                                <p className="arancione rounded-2xl text-xs px-2 py-1">{el.notification}</p>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

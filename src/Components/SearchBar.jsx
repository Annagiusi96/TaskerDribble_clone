export function SearchBar() {
    return (
        <>
            <div className="flex items-center gap-1 grigio rounded-2xl w-2/3">
                <button className="flex items-center px-2"><ion-icon name="search-outline" style={{ color: " #9ca3af" }}></ion-icon></button>
                <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm py-2" />
            </div>
        </>
    )
}
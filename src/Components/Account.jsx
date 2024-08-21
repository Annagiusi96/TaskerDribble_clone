export function Account({ name, job }) {
    return (
        <>
            <div className="flex flex-col">
                <p className=" text-black font-semibold text-lg py-0">{name}</p>
                <p className="text-slate-400 py-1 text-sm">{job}</p>
            </div>
        </>
    )
}
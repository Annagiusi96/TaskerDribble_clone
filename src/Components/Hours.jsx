export function Hours(){
    const hours = ["10.00", "12.00", "14.00", "16.00", "18.00"]

    return(
        <>
        {hours.map((hour,index)=>(
            <div key={index}>
                <p className=" text-gray-300 text-sm font-semibold py-1">{hour}</p>
            </div>
        ))}
        </>
    )
}
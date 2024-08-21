import { changeColor } from "../utilities/changeColor"

export function Rows() {

    const data = [
        {
            day: "Mon",
            activity1: { name: "GreenMarket", hours: 3 },
            activity2: { name: "EduPath", hours: 3.5 },
            oreLibere: 1.5
        },
        {
            day: "Tue",
            activity1: { name: "GreenMarket", hours: 1.6 },
            activity2: { name: "EduPath", hours: 2.2 },
            oreLibere: 1.5
        },
        {
            day: "Wed",
            activity1: { name: "EduPath", hours: 1.6 },
            activity2: { name: "GreenMarket", hours: 1.6 },
            oreLibere: 5
        },
        {
            day: "Thu",
            activity1: { name: "TravelTales", hours: 8 },
            activity2: { name: null, hours: null },
            oreLibere: null
        },
        {
            day: "Fri",
            activity1: { name: "GreenMarket", hours: 2 },
            activity2: { name: "EduPath", hours: 4.5 },
            oreLibere: 1.5
        }
    ]

    return (
        <>
            {data.map((el, index) => (
                <div className="flex items-center" key={index}>
                    <div>
                        <p className=" text-gray-300 text-sm font-semibold px-4 py-2 ">{el.day}</p>
                    </div>
                    <div className="flex widthContainerName grigio p-2 rounded-2xl" style={{ gap: `${el.oreLibere * 2.813}rem`}}>
                        <p className={changeColor(el.activity1.name)} style={{ width: `${el.activity1.hours * 4.375}rem`}}>{el.activity1.name}</p>
                        <p className={changeColor(el.activity2.name)} style={{ width: `${el.activity2.hours * 4.375}rem` }}>{el.activity2.name}</p>
                    </div>
                </div>

            ))}
        </>
    )
}
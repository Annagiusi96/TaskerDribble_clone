import { ButtonCard } from "./ButtonCard";

export function CardRight({ activity, textButton, textP, time }) {
    return (
        <>
            <div className="widthCardRight grigio flex flex-col pt-4 pl-4 rounded-2xl">
                <div className="flex justify-between items-center w-full">
                    <h3 className="font-semibold text-xl">{activity}</h3>
                    <ButtonCard text={textButton} activity={activity} />
                </div>
                <div>
                    <p className="text-slate-500 text-sm w-12/12 pl-0">{textP}</p>
                </div>
                <div className="border-dashed border-slate-300 border-b-2 w-72 p-1"></div>
                <div className="py-4">
                    <div className="flex items-center bg-white rounded-2xl max-w-fit py-1 px-2">
                        <ion-icon name="stopwatch-outline"></ion-icon>
                        <p className="text-black p-2 font-semibold text-sm">Log: {time}</p>
                    </div>

                </div>
            </div>
        </>
    )
}
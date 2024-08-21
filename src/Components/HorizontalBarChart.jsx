import { Rows } from "./Rows";
import { Hours } from "./Hours";

export function HorizontalBarChart() {

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col gap-2 pt-5 items-center" style={{width: 500}}>
                    <Rows />
                </div>
                <div className="flex gap-12 pl-16">
                    <Hours />
                </div>
            </div>
        </>
    )
}
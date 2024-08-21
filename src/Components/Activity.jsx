import { Button } from "./Button";
import { ContainerCentral } from "./ContainerCentralContainers";
import VerticalBarChart from "./VerticalBarChart";


export function Activity() {
    return (
        <>
            <ContainerCentral>
                <div>
                    <div className="flex justify-between  w-full items-center my-0 mx-auto">
                        <h2>Activity</h2>
                        <div className="flex">
                            <Button text={"Week"} color={"black"} />
                            <Button text={"Month"} />
                        </div>
                    </div>
                    <div className="containerCentral flex justify-center pr-36 p-1">
                        <p className="text-black grigio rounded-xl p-1 font-semibold text-xs">9h20m</p>
                    </div>
                    <VerticalBarChart/>
                </div>
            </ContainerCentral>

        </>
    )
}
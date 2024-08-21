import { ContainerCentral } from "./ContainerCentralContainers";
import { HorizontalBarChart } from "./HorizontalBarChart";

export function MySchedule() {
    return (
        <>
            <ContainerCentral>
                <div>
                    <div className="flex justify-between w-full items-center my-0 mx-auto">
                        <h2>My Schedule</h2>
                    </div>
                    <div className="flex">
                        <HorizontalBarChart />
                    </div>
                </div>
            </ContainerCentral>
        </>
    )
}
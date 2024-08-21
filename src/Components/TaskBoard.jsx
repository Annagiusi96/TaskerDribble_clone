import { Button } from "./Button";
import { CardRight } from "./CardRight";
import { ContainerCentral } from "./ContainerCentralContainers";
import { ContainerRight } from "./ContainerRight";

export function TaskBoard() {
    return (
        <>
            <ContainerRight>

                <div className="flex justify-between items-center w-full pb-4">
                    <h2>Task Board</h2>
                    <Button text={"All Task"} color={"black"} />
                </div>
                <div className="gap-5 flex flex-col">

                    <div>
                        <CardRight activity={"EduPath"} textButton={"Design"} textP={"Platform for online learning and professional development"} time={"13h 20m"} />
                    </div>
                    <div>
                        <CardRight activity={"GreenMarket"} textButton={"Concept"} textP={"Eco-friendly online grocery and household goods store"} time={"8h 20m"} />
                    </div>
                    <div>
                        <CardRight activity={"TravelTales"} textButton={"Re-design"} textP={"A social network for travelers to share stories and plan trips"} time={"80h 40m"} />
                    </div>
                </div>
            </ContainerRight>
        </>
    )
}
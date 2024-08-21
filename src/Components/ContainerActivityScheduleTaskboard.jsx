import { Activity } from "./Activity";
import { MySchedule } from "./MySchedule";
import { TaskBoard } from "./TaskBoard";

export function ContainerActivityScheduleTaskboard() {
    return (
        <>
            <div className="flex grigio p-4 gap-4 rounded-3xl">
                <div className="flex flex-col gap-4">
                    <Activity />
                    <MySchedule />
                </div>
                <div >
                    <TaskBoard />
                </div>

            </div>

        </>
    )
}
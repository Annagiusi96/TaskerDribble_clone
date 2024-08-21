import { Avatars } from "./Avatars";
import { Chat } from "./Chat";
import { ListMenu } from "./ListMenu";

export function ContainerTotalLeft() {
    return (
        <>
            <div className="flex flex-col gap-4 w-80">
                <h1 className="py-2">Welcome to the Tasker System!</h1>
                <div>
                    <ListMenu />
                </div>
                <div className="pt-4">
                    <Avatars/>
                </div>
                <div>
                    <Chat/>
                </div>
            </div>
        </>
    )
}